import React from 'react';

export function useStorageListener({ sincronize }) {
  const [storageChange, setStorageChange] = React.useState(false);

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  window.addEventListener('storage', (evt) => {
    if (evt.key === 'TO_DO_APP') {
      setStorageChange(true);
    }
  });

  return { show: storageChange, toggleShow: toggleShow };
}
