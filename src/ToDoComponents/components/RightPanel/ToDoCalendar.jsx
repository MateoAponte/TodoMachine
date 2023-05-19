import moment from 'moment';
import React from 'react';
export function ToDoCalendar({ days, selectedToDoDay, setSelectedToDoDay }) {
  const getDay = (date) => {
    return moment(date).format('DD');
  };
  const getStringDay = (date) => {
    return moment(date).format('ddd');
  };
  const updateSelectedDate = (val) => {
    setSelectedToDoDay(moment(val));
  };
  const localDate = (date) => {
    const tempDate = moment(date).format('ddd');
    return tempDate === selectedToDoDay.format('ddd');
  };

  return (
    <section className="todo-header__calendar">
      {days.map((item, index) => (
        <div
          className={'todo-header__date ' + (!!localDate(item) ? 'todo-header__date--active' : '')}
          key={index}
          onClick={() => {
            updateSelectedDate(item);
          }}>
          <span className="todo-header__helper-text todo-header--bolder">{getStringDay(item)}</span>
          <span className="todo-header__title todo-header--bolder">{getDay(item)}</span>
        </div>
      ))}
    </section>
  );
}
