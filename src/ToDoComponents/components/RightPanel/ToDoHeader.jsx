import moment from 'moment';

const formatDate = (val) => {
  return moment(val).format('MMM Do YY');
};
export function ToDoHeader({ date, children }) {
  return (
    <section className="todo-header">
      <div className="todo-header--centered">
        <span className="todo-header__helper-text todo-header--bolder">{formatDate(date)}</span>
        <h2 className="todo-header__title todo-header--bolder">Today</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

ToDoHeader.defaultProps = {
  date: new Date(),
};
