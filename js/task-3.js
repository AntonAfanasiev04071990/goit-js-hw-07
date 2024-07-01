const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
const updateNameOutput = () => {
const inputValue = nameInput.value.trim();
if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputValue;
    }
    };

    nameInput.addEventListener('input', updateNameOutput);