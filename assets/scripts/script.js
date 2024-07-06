import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



const birthDay = document.querySelector('.js-header__day-input');
const birthMonth = document.querySelector('.js-header__month-input');
const birthYear = document.querySelector('.js-header__year-input');
const calculateElement = document.querySelector('.js-header__calculate-button');

calculateElement.addEventListener('click', () => {
  // Create a Day.js object for the birth date
  const birthDate = dayjs(new Date(birthYear.value, birthMonth.value - 1, birthDay.value));
  // Create a Day.js object for the current date
  const currentDate = dayjs();

  // Calculate the difference in years
  let years = currentDate.year() - birthDate.year();
  // Adjust the years if the current date is before the birthday in the current year
  if (currentDate.month() < birthDate.month() || (currentDate.month() === birthDate.month() && currentDate.date() < birthDate.date())) {
    years--;
  }

  // Calculate the difference in months
  let months = currentDate.month() - birthDate.month();
  if (currentDate.date() < birthDate.date()) {
    months--; // Adjust if the current day is before the birth day
  }
  if (months < 0) {
    months += 12; // Adjust if the current month is before the birth month
  }

  // Calculate the difference in days
  let days = currentDate.date() - birthDate.date();
  if (days < 0) {
    // Get the number of days in the previous month
    const daysInMonth = currentDate.subtract(1, 'month').daysInMonth();
    days += daysInMonth; // Adjust if the current day is before the birth day
  }

  document.querySelector('.js-result__years')
    .innerHTML = `${years}`;

  document.querySelector('.js-result__months')
  .innerHTML = `${months}`;
  
  document.querySelector('.js-result__days')
  .innerHTML = `${days}`;
});
