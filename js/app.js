const selectElement = document.querySelector('#currencySelector');
let valueToCalculate = document.querySelector('#valueToCalculate');

function calculateCurrency() {
    var selectedCurrency = selectElement.options[selectElement.selectedIndex].value;
    let url = "http://api.nbp.pl/api/exchangerates/rates/a/" + selectedCurrency + "/?format=json"
    fetch(url, {
        method: "get"
    }).then(response => response.json()).then(json => {
        document.querySelector('.calculated').innerHTML = valueToCalculate.value
            + ' ' + selectedCurrency.toUpperCase() + ' to '
            + (valueToCalculate.value * json.rates[0].mid) + ' PLN'
    }).catch((error) => {
        console.error('Error:', error);
    });
}