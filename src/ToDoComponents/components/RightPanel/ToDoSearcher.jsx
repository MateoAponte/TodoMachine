import React from 'react';
import { IoIosSearch } from 'react-icons/all';

export function ToDoSearcher({ searchValue, setSearchValue }) {
  const [searchButton, setSearchButton] = React.useState(false);

  const getValue = (evt) => {
    const value = evt.target.value;
    setSearchValue(value);
  };

  return (
    <div className="todo__searcher">
      <input
        className={`todo__input ${!searchButton ? 'todo__input--large' : 'todo__input--small'}`}
        type="text"
        value={searchValue}
        placeholder="Busca tus tareas"
        onInput={getValue}
      />
      <span className={`todo__icon ${searchButton && 'todo__icon--bordered'}`} onClick={() => setSearchButton(!searchButton)}>
        <IoIosSearch />
      </span>
    </div>
  );
}
