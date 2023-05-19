export function ToDoCounter({ selectedIndex, searchValue, filteredList }) {
  const list = filteredList[selectedIndex].data;

  const getCompletedTask = (value) => {
    return list.filter((task) => (value ? !task.completed : task.completed)).length;
  };

  if (searchValue && list.length <= 0) {
    return <span className="todo__counter todo-header__helper-text todo-header--bolder"> No se han encontrado resultados </span>;
  } else if (!searchValue && list.length > 0 && getCompletedTask(false) === list.length) {
    return <span className="todo__counter todo-header__helper-text todo-header--bolder">Has completado todas tus tareas!</span>;
  } else if (list.length > 0) {
    return (
      <span className="todo__counter todo-header__helper-text todo-header--bolder">
        Has completado {getCompletedTask(false)} de {list.length} tareas
      </span>
    );
  }
}
