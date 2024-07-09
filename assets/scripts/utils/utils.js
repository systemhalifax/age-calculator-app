// Utility Functions

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

export function clearErrorMessages(day, month, year) {
  if (day.nextElementSibling && day.nextElementSibling.innerHTML === 'Must be a valid date') {
    day.parentElement.classList.remove('error');
    month.parentElement.classList.remove('error');
    year.parentElement.classList.remove('error');
  }
}

export function setError(element, message) {
  element.nextElementSibling.innerHTML = message;
  element.parentElement.classList.add('error');
}

export function clearError(element) {
  element.parentElement.classList.remove('error');
  element.nextElementSibling.innerHTML = '';
}

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