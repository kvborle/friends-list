import { useState } from 'react';
import List from './List';
import InputForm from './InputForm';
import './App.css';

function App() {
  const [nameText, setNameText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [friendsList, setFriendsList] = useState([]);
  const [isSortChecked, setIsSortChecked] = useState(false);

  const endIndex = currentPage * 4;
  const startIndex = endIndex - 4;

  let filteredList = friendsList.filter(friend => {
    return friend.name.indexOf(searchText) !== -1;
  })
  if (isSortChecked) {
    filteredList = filteredList.sort((a, b) => { return !a.isFavorite - !b.isFavorite });
  }

  const handleNameChange = (event) => {
    const value = (event && event.target && event.target.value) || '';
    setNameText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nameText && nameText.trim() && nameText.trim().length > 0) {
      setFriendsList([
        ...friendsList,
        {
          id: Math.random(),
          name: nameText && nameText.trim(),
          isFavorite: false
        }
      ])
    } else {
      alert('Please enter name')
    }
    setNameText('')
  }

  const handleSearchTextChange = (event) => {
    setCurrentPage(1)
    const value = (event && event.target && event.target.value) || '';
    setSearchText(value);
  }

  const deleteNameFromList = (item) => {
    if (window.confirm('Are you sure want to delete?')) {
      const tempArray = [...friendsList];
      const index = tempArray.findIndex(listItem => listItem.id === item.id)
      const filteredIndex = filteredList.findIndex(listItem => listItem.id === item.id)
      if (filteredIndex % 4 === 0 && (!filteredList[filteredIndex + 1])) {
        setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)
      }
      tempArray.splice(index, 1);
      setFriendsList(tempArray);
    }
  }

  const favoriteNameFromList = (item) => {
    const tempArray = [...friendsList];
    tempArray.map(listItem => {
      if (listItem.id === item.id) {
        listItem.isFavorite = !listItem.isFavorite
      }
      return listItem;
    })
    setFriendsList(tempArray);
  }

  const handleCheckbox = (event) => {
    setIsSortChecked((event && event.target && event.target.checked) || false)
  }

  return (
    <div className="main-container">
      <header className="header p-10-20">
        Friends list
      </header>
      <InputForm
        handleSubmit={handleSubmit}
        value={nameText}
        placeholder="Enter your friend's name"
        handleChange={handleNameChange}
      />
      <input
        className="p-10-20"
        value={searchText}
        placeholder="Search friend's name"
        onChange={handleSearchTextChange}
      />
      <div className="list-container">
        {friendsList.length > 0 &&
          <div className="p-10-20" style={{ alignSelf: 'flex-end' }}>
            <input
              type="checkbox"
              id="sortByFavorite"
              value={isSortChecked}
              onChange={handleCheckbox}
            />
            <label htmlFor="sortByFavorite">Sort By Favorite</label>
          </div>}
        <List
          list={filteredList.slice(startIndex, endIndex)}
          handleDelete={deleteNameFromList}
          handleFavorite={favoriteNameFromList}
        />
        {filteredList.length > 0 &&
          <div className="pagination p-10-20">
            {Array.from({ length: Math.ceil(filteredList.length / 4) }, (_, i) => i + 1)
              .map(item =>
                <a
                  key={item}
                  className={currentPage === item ? 'active' : ''}
                  onClick={() => { setCurrentPage(item) }}
                >
                  {item}
                </a>
              )}
          </div>}
      </div>
    </div>
  );
}

export default App;
