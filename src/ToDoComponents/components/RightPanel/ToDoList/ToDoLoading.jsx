export const ToDoLoading = () => {
  return (
    <div className="todo__list">
      <div className="todo__tasks-container">
        <span className="todo__tasks-title">Loading Tasks...</span>
        {[1, 2, 3].map(() => {
          return (
            <div className="todo__row">
              <div className="todo__element todo__element--block">
                <section className="todo__item todo__item--loading">
                  <div className="todo__item-info">
                    <span className="todo__item-title"></span>
                    <span className="todo__item-description"></span>
                  </div>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
