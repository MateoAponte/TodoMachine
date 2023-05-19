import moment from 'moment';

const getSelectedIndex = (filteredList, selectedToDoDay) => {
  const index = filteredList.findIndex((item) => {
    return moment(item.date).format('YYYY/MM/DD') === selectedToDoDay.format('YYYY/MM/DD');
  });
  return index;
};

const getDays = (array) => {
  return array.map((item) => item.date);
};

export { getDays, getSelectedIndex };
