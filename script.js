const display = document.getElementById('display');
const history = document.getElementById('history');

function appendToDisplay(value) {
    display.value += value;  
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression);
        
        // Add calculation to history
        const historyEntry = document.createElement('div');
        historyEntry.textContent = `${expression} = ${result}`;
        history.appendChild(historyEntry);
        
        // Auto-scroll to the bottom of history
        history.scrollTop = history.scrollHeight;
        
        // Update display with result
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || 
        key === '*' || key === '/' || key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
