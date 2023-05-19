import { useStorageListener } from './useStorageListener';

export function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener({ sincronize });

  if (show) {
    return (
      <div className="alert__container">
        <div className="alert__modal">
          <span className="alert__title">¡Se detectaron cambios en tu lista!</span>
          <button className="alert__button" onClick={toggleShow}>
            Refrescar elementos
          </button>
        </div>
      </div>
    );
  }
}
