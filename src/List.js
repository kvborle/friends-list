import './App.css';

function List({
  list = [], handleDelete = () => { }, handleFavorite = () => { }
}) {

  return (
    list && list.length > 0 ?
      list.map(item => (
        <div className="list" key={item && item.id}>
          <div className="name-container">
            <div className="title">{item && item.name}</div>
            <div className="subtext">is your friend</div>
          </div>
          <button
            className="favorite-button"
            style={{ color: item.isFavorite ? 'red' : 'black' }}
            onClick={() => handleFavorite(item)}
          >
            Favorite
          </button>
          <button
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </div>
      )) :
      <div className="list">No Friends List Found</div>
  )
}

export default List;
