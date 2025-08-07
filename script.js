const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
       
        const expression = currentInput.replace(/x/g, '*').replace(/\^/g, '**');
        const result = eval(expression);
        display.textContent = result;
        currentInput = result.toString();
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else if (value === 'AC') {
      currentInput = '';
      display.textContent = '0';
    } else if (value === 'C') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
