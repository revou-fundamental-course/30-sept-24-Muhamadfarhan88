document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertBtn = document.getElementById('convert');
    const resetBtn = document.getElementById('reset');
    const reverseBtn = document.getElementById('reverse');
    const calculationFormula = document.getElementById('calculation-formula');

    function updateCalculationFormula(celsius, fahrenheit) {
        calculationFormula.innerHTML = `${fahrenheit}°F = (${celsius}°C × 9/5) + 32`;
    }

    convertBtn.addEventListener('click', function() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
            updateCalculationFormula(celsius, fahrenheit.toFixed(2));
        } else {
            fahrenheitInput.value = 'Invalid input';
            calculationFormula.innerHTML = '';
        }
    });

    resetBtn.addEventListener('click', function() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        calculationFormula.innerHTML = '';
    });

    reverseBtn.addEventListener('click', function() {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            celsiusInput.value = celsius.toFixed(2);
            fahrenheitInput.value = fahrenheit.toFixed(2);
            updateCalculationFormula(celsius.toFixed(2), fahrenheit);
        } else {
            celsiusInput.value = 'Invalid input';
            calculationFormula.innerHTML = '';
        }
    });
});