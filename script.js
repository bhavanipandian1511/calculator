let displayValue = '';
let calculationHistory = [];

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result;
        document.getElementById('display').value = result;

        // Add the calculation to history
        calculationHistory.push(`${displayValue}`);
        if (calculationHistory.length > 10) {
            calculationHistory.shift(); // Remove the oldest calculation if there are more than 10
        }
        updateHistory();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    for (let i = 0; i < calculationHistory.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = calculationHistory[i];
        historyList.appendChild(listItem);
    }
}

