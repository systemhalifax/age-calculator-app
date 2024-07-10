import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

/**
 * Calculate the age in days, months, and years given a birth date.
 * @param {number} day - The day of birth.
 * @param {number} month - The month of birth.
 * @param {number} year - The year of birth.
 * @returns {Object} - The age in days, months, and years.
 */

function calculateAge (day, month, year) {
  const birthDay = dayjs(new Date(year.value, month.value - 1, day.value));
  const currentDate = dayjs();

  let days = currentDate.date() - birthDay.date();
  if (days < 0) {
    const daysInMonth = currentDate.subtract(1, 'month').daysInMonth();
    days += daysInMonth;
  }
  
  let months = currentDate.month() - birthDay.month();
  if (currentDate.date() < birthDay.date()) {
    months--;
  }
  if (months < 0) {
    months += 12;
  }

  let years = currentDate.year() - birthDay.year();
  if (currentDate.month() < birthDay.month() || (currentDate.month() === birthDay.month() && currentDate.date() < birthDay.date())) {
    years--;
  }

  return {days, months, years };
}

export default calculateAge;