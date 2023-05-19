import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { fillCalendarArray } from '../utils/date';
import { getSelectedIndex } from '../utils/getter';

export const useToDo = ({ searchValue, selectedToDoDay }) => {
  const { item: toDoSaved, saveItem: saveTodos, loading, error, sincronizeItem: sincronizeToDos } = useLocalStorage('TO_DO_APP', fillCalendarArray());
  const [filteredList, setFilteredList] = React.useState(toDoSaved);

  React.useEffect(() => {
    const selectedIndex = getSelectedIndex(toDoSaved, selectedToDoDay || new Date());
    const selected = toDoSaved[selectedIndex].data;
    let searched = [];
    if (searchValue) {
      searched =
        selected.filter((item) => {
          return item.name.toLowerCase().indexOf(searchValue) !== -1;
        }) || [];
    } else {
      searched = selected;
    }

    const tempArray = [...toDoSaved];
    tempArray[selectedIndex] = { date: toDoSaved[selectedIndex].date, data: searched };

    setFilteredList(tempArray);
  }, [toDoSaved, searchValue, selectedToDoDay]);

  return {
    filteredList,
    sincronizeToDos,
    saveTodos,
    loading,
    error,
  };
};
