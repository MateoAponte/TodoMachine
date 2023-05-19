import moment from 'moment';

const fillCalendarArray = () => {
  function getToMonday(date = new Date()) {
    var day = date.getDay() || 7;
    if (day !== 1) date.setHours(-24 * (day - 1));
    return date;
  }
  const monday = moment(getToMonday());
  let tempDay = monday;
  let calendar = [];
  while (tempDay.format('dddd') !== 'Sunday') {
    calendar.push({ date: tempDay.format('YYYY/MM/DD hh:mm') });
    tempDay.add(1, 'days');
  }
  calendar.push({ date: tempDay.format('YYYY/MM/DD hh:mm') });

  const tempList = [];

  for (let i = 0; i < 7; i++) {
    tempList.push({ date: calendar[i].date, data: [] });
  }

  return tempList;
};

const fillHourArray = () => {
  let hours = [];
  for (let i = 1; i <= 24; i++) {
    hours.push({
      hour: i + (i < 12 ? ' AM' : ' PM'),
    });
  }
  return hours;
};

export { fillCalendarArray, fillHourArray };
