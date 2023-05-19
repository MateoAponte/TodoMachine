import React from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

export function ToDoItem({ data, openDeleteTaskModal, checkElement }) {
  const getCheckBox = () => {
    if (data.completed) {
      return <ImCheckboxChecked onClick={() => checkElement(data, !data.completed)} />;
    } else {
      return <ImCheckboxUnchecked onClick={() => checkElement(data, !data.completed)} />;
    }
  };

  return (
    <div className="todo__row" key={data.id}>
      <div className="todo__element todo__element--hour"> {data.hour} </div>
      <div className="todo__element todo__element--block">
        <section className="todo__item" style={{ backgroundColor: data.color }}>
          <div className={`todo__item-checkbox ${data.completed && 'todo__item-checkbox--checked'}`}>{getCheckBox()}</div>
          <div className="todo__item-info">
            <span className={`todo__item-title ${data.completed && 'todo__item-title--overline'}`}> {data.name} </span>
            <span className={`todo__item-description ${data.completed && 'todo__item-description--overline'}`}> {data.description} </span>
          </div>
          <IoIosCloseCircleOutline onClick={() => openDeleteTaskModal(data)} />
        </section>
      </div>
    </div>
  );
}
