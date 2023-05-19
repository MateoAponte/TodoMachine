import { useEffect } from 'react';
import CompletedTasks from '../../../assets/image/done_1.png';
import CommonTasks from '../../../assets/image/task_1.png';
import { ToDoLoading } from './ToDoLoading';

export function ToDoList({ searchValue, hours, children, filteredList, selectedIndex, comprobeData, loading, error }) {
  useEffect(() => {
    return () => {
      console.log('Component umount');
    };
  }, []);

  const hasCompletedTasks = () => {
    const hasCompleted = filteredList[selectedIndex].data.filter((item) => item.completed);
    if (!searchValue && hasCompleted.length <= 0) {
      return (
        <div className="todo__tasks-empty">
          <img className="todo__tasks-img" src={CompletedTasks} alt="Completed Task" />
          <span className="todo__tasks-helper-text">¡No has completado ninguna tarea!</span>
        </div>
      );
    }
  };
  const hasTasks = () => {
    const hasTasks = filteredList[selectedIndex].data;
    const taskWithoutComplete = hasTasks.filter((task) => task.completed === false);

    if (!searchValue && taskWithoutComplete.length <= 0) {
      return (
        <div className="todo__tasks-empty">
          <img className="todo__tasks-img" src={CommonTasks} alt="Completed Task" />
          <span className="todo__tasks-helper-text">¡No has añadido tareas!</span>
        </div>
      );
    }
  };
  if (loading) {
    return <ToDoLoading />;
  } else {
    return (
      <div className="todo__list">
        <div className="todo__tasks-container">
          <span className="todo__tasks-title">Your Task</span>
          {hours.map((item, index) => {
            if (!comprobeData(item.hour, filteredList).completed && comprobeData(item.hour, filteredList).hour) return children(item, index);
          })}
          {hasTasks()}
        </div>
        <div className="todo__tasks-divider"></div>
        <div className="todo__tasks-container">
          <span className="todo__tasks-title">Completed Task</span>
          {hours.map((item, index) => {
            if (comprobeData(item.hour, filteredList).completed && comprobeData(item.hour, filteredList).hour) return children(item, index);
          })}
          {hasCompletedTasks()}
        </div>
      </div>
    );
  }
}
