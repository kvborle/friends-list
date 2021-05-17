import { useState } from 'react';
import { ReactComponent as Delete } from './images/delete.svg';
import { ReactComponent as Star } from './images/star.svg';
import './App.css';

function ListItem({ item = {}, handleDelete = () => { }, handleFavorite = () => { } }) {
  const [favHoverColor, setFavHoverColor] = useState('')

  const setFavouriteHoverState = (isReset) => {
    if (item.isFavorite) {
      setFavHoverColor(isReset ? '#d3d3d3' : '#ffffff')
    } else {
      setFavHoverColor(isReset ? "#ffffff" : '#d3d3d3')
    }
  }

  const favColor = favHoverColor || ((item && item.isFavorite) ? '#d3d3d3' : '#ffffff');

  return (
    <div className="list">
      <div className="name-container">
        <div className="title">{item && item.name}</div>
        <div className="subtext">is your friend</div>
      </div>
      <button
        className="favorite-button"
        onClick={() => handleFavorite(item)}
        onMouseEnter={() => setFavouriteHoverState(false)}
        onMouseLeave={() => setFavouriteHoverState(true)}
      >
        <Star fill={favColor} />
      </button>
      <button
        onClick={() => handleDelete(item)}
      >
        <Delete />
      </button>
    </div>
  )
}

function List({
  list = [], handleDelete = () => { }, handleFavorite = () => { }
}) {

  return (
    list && list.length > 0 ?
      list.map(item => (
        <ListItem
          key={item.id}
          item={item}
          handleDelete={() => handleDelete(item)}
          handleFavorite={() => handleFavorite(item)}
        />
      )) :
      <div className="list">No Friends List Found</div>
  )
}

export default List;
