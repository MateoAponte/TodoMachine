import React from 'react';

/* Import Base Functions */
import { Modal } from '../portal/modal';

/* Import Utils */
import { useToDo } from '../hooks/useToDo';
import { fillCalendarArray, fillHourArray } from '../utils/date';
import { getSelectedIndex, getDays } from '../utils/getter';

/* Import 3rd party libraries */
import moment from 'moment';

/* Import Components */
import { ToDoForm } from '../components/LeftPanel/ToDoForm';
import { ToDoHeader } from '../components/RightPanel/ToDoHeader';
import { ToDoCalendar } from '../components/RightPanel/ToDoCalendar';
import { ToDoList } from '../components/RightPanel/ToDoList/ToDoList';
import { ToDoItem } from '../components/RightPanel/ToDoList/ToDoItem';
import { RightPanel } from '../components/RightPanel/RightPanel';
import { LeftPanel } from '../components/LeftPanel/LeftPanel';
import { ToDoCounter } from '../components/RightPanel/ToDoCounter';
import { ToDoSearcher } from '../components/RightPanel/ToDoSearcher';
import { ChangeAlert } from '../components/ChangeAlert/ChangeAlert';
import { CloseModal } from '../components/Modal/CloseModal';

export function ToDoContainer() {
  const [toDoList, setToDoList] = React.useState(fillCalendarArray());
  const [selectedToDoDay, setSelectedToDoDay] = React.useState(moment(new Date()));
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState({});
  const [searchValue, setSearchValue] = React.useState('');

  const { filteredList, sincronizeToDos, saveTodos, loading, error } = useToDo({ searchValue, selectedToDoDay });

  React.useEffect(() => {
    setSearchValue('');
  }, [toDoList]);

  const comprobeData = (hour, list) => {
    const selected = getSelectedIndex(filteredList, selectedToDoDay || new Date());
    const data =
      list[selected].data.find((item) => {
        return item.hour === hour;
      }) || {};
    return data;
  };
  const deleteElement = (element) => {
    const todo = [...filteredList];
    const index = getSelectedIndex(filteredList, selectedToDoDay);
    const elementIndex = todo[index].data.findIndex((task) => task.id === element.id);
    todo[index].data.splice(elementIndex, 1);
    setToDoList(todo);
    setShowDeleteModal(false);
    saveTodos(todo);
  };
  const openDeleteTaskModal = (element) => {
    setShowDeleteModal(true);
    setSelectedTask(element);
  };
  const checkElement = (element, val) => {
    const todo = [...filteredList];
    const index = getSelectedIndex(filteredList, selectedToDoDay);
    const elementIndex = todo[index].data.findIndex((task) => task.id === element.id);
    todo[index].data[elementIndex] = { ...element, completed: val };
    setToDoList(todo);
    saveTodos(todo);
  };

  let hours = [];

  hours = fillHourArray();

  return (
    <main className="main-container">
      <div className="todo-container">
        <LeftPanel>
          <ToDoForm
            selectedToDoDay={selectedToDoDay}
            filteredList={filteredList}
            selectedIndex={getSelectedIndex(filteredList, selectedToDoDay)}
            hours={hours}
            setToDoList={setToDoList}
            saveTodos={saveTodos}
            loading
          />
        </LeftPanel>
        <RightPanel>
          <ToDoHeader>
            <ToDoSearcher searchValue={searchValue} setSearchValue={setSearchValue} />
          </ToDoHeader>
          <div>
            <ToDoCalendar selectedToDoDay={selectedToDoDay} setSelectedToDoDay={setSelectedToDoDay} days={getDays(toDoList)} />
            <ToDoCounter searchValue={searchValue} selectedIndex={getSelectedIndex(filteredList, selectedToDoDay)} filteredList={filteredList} />
            <ToDoList
              loading={loading}
              error={error}
              searchValue={searchValue}
              hours={hours}
              filteredList={filteredList}
              comprobeData={comprobeData}
              selectedIndex={getSelectedIndex(filteredList, selectedToDoDay)}>
              {(todo) => (
                <ToDoItem checkElement={checkElement} key={todo.id} openDeleteTaskModal={openDeleteTaskModal} data={comprobeData(todo.hour, filteredList)} />
              )}
            </ToDoList>
          </div>
        </RightPanel>
      </div>
      <Modal showDeleteModal={showDeleteModal}>
        <CloseModal selectedTask={selectedTask} deleteElement={deleteElement} setShowDeleteModal={setShowDeleteModal} />
      </Modal>
      <ChangeAlert sincronize={sincronizeToDos} />
    </main>
  );
}
