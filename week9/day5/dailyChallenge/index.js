// Daily Challenge: Currency Converter;


// view
const inputFirstCurrency = document.getElementById('firstCurrency')
const inputSecondCurrency = document.getElementById('secondCurrency')
const amountInput = document.getElementById('amount');
const form = document.querySelector('.calculate')
const result = document.querySelector('.result')


//Model
const getData = async() => {
    const firstCurrency = inputFirstCurrency.value.slice(0, 3);
    const secondCurrency = inputSecondCurrency.value.slice(0, 3)
    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${firstCurrency}/${secondCurrency}`);
        if (!res.ok) {
            throw new Error('Something went wrong');
        }
        console.log(res)
        const data = await res.json();
        console.log(data)
        convert(data.conversion_rate)
    } catch (err) {
        alert('Must insert values')
        console.log(err)
    }
}

//controller
form.addEventListener('submit', (e) => {
    e.preventDefault()
    getData()
})
const convert = (rate) => {
    const res = amountInput.value * rate
    result.textContent = res.toFixed(3) + ' ' + inputSecondCurrency.value.slice(0, 3);
}