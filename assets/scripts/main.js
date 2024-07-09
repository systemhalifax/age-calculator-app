import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import calculateAge from './main/calculateAge.js';

const inputDays = document.querySelector('.js-header__input-days');
const inputMonths = document.querySelector('.js-header__input-months');
const inputYears = document.querySelector('.js-header__input-years');


inputDays.addEventListener('input', () => {
    if (inputDays.value > 31) {
      inputDays.nextElementSibling.innerHTML = 'Must be a valid day'
      inputDays.parentElement.classList.add('error');
    } else {
      inputDays.parentElement.classList.remove('error');
    }
});

inputMonths.addEventListener('input', () => {
  if (inputMonths.value > 12) {
    inputMonths.nextElementSibling.innerHTML = 'Must be a valid month'
    inputMonths.parentElement.classList.add('error');
  } else {
    inputMonths.parentElement.classList.remove('error');
  }
});

inputYears.addEventListener('input', () => {
  const currentDate = dayjs();

  if (inputYears.value > currentDate.year() ) {
    inputYears.nextElementSibling.innerHTML = 'Must be in the past'
    inputYears.parentElement.classList.add('error');
  } else {
    inputYears.parentElement.classList.remove('error');
  }
});

const calculateButton = document.querySelector('.js-header__calculate-button');

calculateButton.addEventListener('click', () => {

  const element = document.querySelector('.error') || false;

  //checks if error exist
  if(element && element.classList.contains('error')) return;

  console.log('pass');

});






/*
function ageCalculatorApp() {
  const birthDay = document.querySelector('.js-header__day-input');
  const birthMonth = document.querySelector('.js-header__month-input');
  const birthYear = document.querySelector('.js-header__year-input');
  const dayText = document.querySelector('.js-header__day-text');
  const monthText = document.querySelector('.js-header__month-text');
  const yearText = document.querySelector('.js-header__year-text');
  const dayInput = document.querySelector('.js-header__day-input');
  const monthInput = document.querySelector('.js-header__month-input');
  const yearInput = document.querySelector('.js-header__year-input');
  const dayErrorMessage = document.querySelector('.js-error-day');
  const monthErrorMessage = document.querySelector('.js-error-month');
  const yearErrorMessage = document.querySelector('.js-error-year');
  const calculateElement = document.querySelector('.js-header__calculate-button');

  calculateElement.addEventListener('click', () => {
    let isInvalid = false;

    if (birthDay.value === '') {
      dayText.classList.add('is-invalid');
      dayInput.classList.add('is-invalid-input');
      dayErrorMessage.classList.add('true');
      dayErrorMessage.innerHTML = `This field is required`;
      isInvalid = true;
    } else if (birthDay.value > 31) {
      dayText.classList.add('is-invalid');
      dayInput.classList.add('is-invalid-input');
      dayErrorMessage.classList.add('true');
      dayErrorMessage.innerHTML = `Must be a valid day`;
      isInvalid = true;
    }

    if (birthMonth.value === '') {
      monthText.classList.add('is-invalid');
      monthInput.classList.add('is-invalid-input');
      monthErrorMessage.classList.add('true');
      monthErrorMessage.innerHTML = `This field is required`;
      isInvalid = true;
    } else if (birthMonth.value > 12) {
      monthText.classList.add('is-invalid');
      monthInput.classList.add('is-invalid-input');
      monthErrorMessage.classList.add('true');
      monthErrorMessage.innerHTML = `Must be a valid month`;
      isInvalid = true;
    }

    if (birthYear.value === '') {
      yearText.classList.add('is-invalid');
      yearInput.classList.add('is-invalid-input');
      yearErrorMessage.classList.add('true');
      yearErrorMessage.innerHTML = `This field is required`;
      isInvalid = true;
    } else if (birthYear.value > dayjs().year()) {
      yearText.classList.add('is-invalid');
      yearInput.classList.add('is-invalid-input');
      yearErrorMessage.classList.add('true');
      yearErrorMessage.innerHTML = `Must be in the past`;
      isInvalid = true;
    }

    if (isInvalid) {
      return;
    }

    function isValidDate(day, month, year) {
      day = Number(day);
      month = Number(month);
      year = Number(year);

      const date = new Date(year, month - 1, day);

      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    }

    if (!isValidDate(birthDay.value, birthMonth.value, birthYear.value)) {
      dayText.classList.add('is-invalid');
      dayInput.classList.add('is-invalid-input');
      monthText.classList.add('is-invalid');
      monthInput.classList.add('is-invalid-input');
      yearText.classList.add('is-invalid');
      yearInput.classList.add('is-invalid-input');
      dayErrorMessage.classList.add('true');
      dayErrorMessage.innerHTML = `Must be a valid date`;
      return;
    }

    const invalidElements = document.querySelectorAll('.is-invalid');
    const invalidInputs = document.querySelectorAll('.is-invalid-input');
    const invalidMessages = document.querySelectorAll('.true');

    invalidElements.forEach((element) => {
      element.classList.remove('is-invalid');
    });

    invalidInputs.forEach((element) => {
      element.classList.remove('is-invalid-input');
    });

    invalidMessages.forEach((element) => {
      element.classList.remove('true');
    });


    const { days, months, years } = calculateAge(birthDay, birthMonth, birthYear);

    const ageDisplayDays = document.querySelector('.js-result__days');
    const ageDisplayMonths = document.querySelector('.js-result__months');
    const ageDisplayYears = document.querySelector('.js-result__years');

    animateNumber(ageDisplayDays, days);
    animateNumber(ageDisplayMonths, months);
    animateNumber(ageDisplayYears, years);

    // Animated value output function
    function animateNumber(element, targetNumber) {
      const getStep = (num) => {
        if (num > 200) return 1;
        if (num > 100) return 10;
        if (num > 75) return 20;
        if (num > 50) return 25;
        if (num > 25) return 35;
        return 50;
      };

      let currentNumber = 0;
      const step = getStep(targetNumber);

      if (targetNumber === 0) {
        element.innerHTML = currentNumber;
        return;
      }

      const interval = setInterval(() => {
        currentNumber += 1;
        element.innerHTML = currentNumber;
        if (currentNumber === targetNumber) {
          clearInterval(interval);
        }
      }, step);  
    }
  });
}

ageCalculatorApp();
*/