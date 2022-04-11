const totalTip = document.getElementById('totalTip');
totalTip.style.display = 'none';
const displayTotal = document.getElementById('tip');

const calculateTip = () => {
    let amountInput = Number(document.getElementById('billamt').value);
    let serviceQualityInput = Number(document.getElementById('serviceQual').value);
    console.log(serviceQualityInput);
    let numberOfPeopleInput = document.getElementById('serviceQual').value;

    if (serviceQualityInput === 0 || !amountInput) {
        alert('Must enter value');
    }
    if (!numberOfPeopleInput || numberOfPeopleInput < 1) {
        numberOfPeopleInput = 1;
    }

    let total = (amountInput * serviceQualityInput) / numberOfPeopleInput;
    displayTotal.innerHTML = total.toFixed(2);
    totalTip.style.display = 'block';
};

const btn = document.getElementById('calculate');

btn.addEventListener('click', calculateTip);