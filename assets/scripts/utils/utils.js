// Utility Functions

/**
 * Check if a given date is valid.
 * @param {number} day - The day of the month.
 * @param {number} month - The month of the year.
 * @param {number} year - The year.
 * @returns {boolean} - True if the date is valid, false otherwise.
 */
export function isValidDate(day, month, year) {
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

/**
 * Clear error messages for day, month, and year inputs.
 * @param {HTMLElement} day - The day input element.
 * @param {HTMLElement} month - The month input element.
 * @param {HTMLElement} year - The year input element.
 */
export function clearErrorMessages(day, month, year) {
  if (day.nextElementSibling && day.nextElementSibling.innerHTML === 'Must be a valid date') {
    day.parentElement.classList.remove('error');
    month.parentElement.classList.remove('error');
    year.parentElement.classList.remove('error');
  }
}

/**
 * Set an error message for a given input element.
 * @param {HTMLElement} element - The input element.
 * @param {string} message - The error message.
 */
export function setError(element, message) {
  element.nextElementSibling.innerHTML = message;
  element.parentElement.classList.add('error');
}

/**
 * Clear the error message for a given input element.
 * @param {HTMLElement} element - The input element.
 */
export function clearError(element) {
  element.parentElement.classList.remove('error');
  element.nextElementSibling.innerHTML = '';
}

/**
 * Animate the display of a number incrementally.
 * @param {HTMLElement} element - The element to display the number.
 * @param {number} targetNumber - The number to animate to.
 */
export function animateNumber(element, targetNumber) {
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