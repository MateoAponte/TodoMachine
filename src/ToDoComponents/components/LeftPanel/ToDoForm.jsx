import React from 'react';

import Image from '../../assets/image/all_task.png';

export function ToDoForm({ filteredList, hours, selectedIndex, setToDoList, saveTodos }) {
  const [taskName, setTaskName] = React.useState('');
  const [taskDescription, setTaskDescription] = React.useState('');
  const [taskHour, setTaskHour] = React.useState('');

  const addTask = () => {
    const backgrounds = ['#FFC3AC', '#FC8C77', '#FFD7BD', '#8ACBC0', '#FFCCD6', '#FFE6C1', '#FFD0A8', '#FFB59E', '#C8C0AE', '#A3C6C0'];
    const index = Math.floor(Math.random() * (backgrounds.length - 0) + 0);

    const newVal = {
      name: taskName,
      description: taskDescription,
      hour: taskHour,
      color: backgrounds[index],
      id: Math.random().toString(16).substr(2, 9),
      completed: false,
    };
    const localVal = [...filteredList];
    localVal[selectedIndex].data.push(newVal);
    setToDoList(localVal);
    saveTodos(localVal);
    setTaskName('');
    setTaskDescription('');
    setTaskHour('1 AM');
  };

  return (
    <>
      <div className="todo__form-image">
        <img src={Image} alt="Add task" />
      </div>
      <h2 className="todo__form-title">Create new Task</h2>
      <div className="todo__form-row">
        <label htmlFor="taskCreate">Add task name</label>
        <input type="text" id="taskCreate" placeholder="Name of you task" value={taskName} onChange={(evt) => setTaskName(evt.target.value)} />
      </div>
      <div className="todo__form-row">
        <label htmlFor="taskCreate">Add description</label>
        <input
          type="text"
          id="taskCreate"
          placeholder="Description of you task"
          value={taskDescription}
          onChange={(evt) => setTaskDescription(evt.target.value)}
        />
      </div>
      <div className="todo__form-row">
        <label htmlFor="taskCreate">Select hour</label>
        <select type="text" id="taskCreate" placeholder="Description of you task" value={taskHour} onChange={(evt) => setTaskHour(evt.target.value)}>
          {hours.map((item) => {
            return (
              <option value={item.hour} key={item.hour}>
                {item.hour}
              </option>
            );
          })}
        </select>
      </div>
      <button className="todo__form-button" onClick={() => addTask()}>
        Add task
      </button>
    </>
  );
}
