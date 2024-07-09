import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import calculateAge from './main/calculateAge.js';
import { isValidDate, clearErrorMessages, setError, clearError, animateNumber } from './utils/utils.js';

const day = document.querySelector('.js-age-calculator__input-day');
const month = document.querySelector('.js-age-calculator__input-month');
const year = document.querySelector('.js-age-calculator__input-year');
const calculateButton = document.querySelector('.js-age-calculator__calculate-button');

day.addEventListener('input', () => {
  clearErrorMessages(day, month, year);
  if (day.value > 31) {
    setError(day, 'Must be a valid day');
  } else {
    clearError(day);
  }
});

month.addEventListener('input', () => {
  clearErrorMessages(day, month, year);
  if (month.value > 12) {
    setError(month, 'Must be a valid month');
  } else {
    clearError(month);
  }
});

year.addEventListener('input', () => {
  const currentDate = dayjs();
  clearErrorMessages(day, month, year);
  if (year.value > currentDate.year()) {
    setError(year, 'Must be in the past');
  } else {
    clearError(year);
  }
});

calculateButton.addEventListener('click', () => {
  let isInputEmpty = false;

  if (!day.value) {
    setError(day, 'This field is required');
    isInputEmpty = true;
  } else {
    clearError(day);
  }

  if (!month.value) {
    setError(month, 'This field is required');
    isInputEmpty = true;
  } else {
    clearError(month);
  }

  if (!year.value) {
    setError(year, 'This field is required');
    isInputEmpty = true;
  } else {
    clearError(year);
  }

  if (isInputEmpty) return;

  const error = document.querySelector('.error');
  if (error && error.classList.contains('error')) return;

  if (!isValidDate(day.value, month.value, year.value)) {
    setError(day, 'Must be a valid date');
    setError(month, '');
    setError(year, '');
    return;
  }

  const { days, months, years } = calculateAge(day, month, year);

  const ageDisplayDays = document.querySelector('.js-age-calculator__result-days');
  const ageDisplayMonths = document.querySelector('.js-age-calculator__result-months');
  const ageDisplayYears = document.querySelector('.js-age-calculator__result-years');

  animateNumber(ageDisplayDays, days);
  animateNumber(ageDisplayMonths, months);
  animateNumber(ageDisplayYears, years);
});