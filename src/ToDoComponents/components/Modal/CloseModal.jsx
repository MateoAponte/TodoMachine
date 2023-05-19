export function CloseModal({ selectedTask, deleteElement, setShowDeleteModal }) {
  const closeModal = () => () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="modal modal--minify">
      <h3 className="modal__header">Are you sure to delete this task?</h3>
      <div className="modal__footer">
        <button className="button button--cancel" onClick={closeModal()}>
          Cancel
        </button>
        <button className="button button--delete" onClick={() => deleteElement(selectedTask)}>
          Delete
        </button>
      </div>
    </div>
  );
}
