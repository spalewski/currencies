const result = document.querySelector('#calculated');
const selectElement = document.querySelector('#currencySelector');

let currenciesTable = 'http://api.nbp.pl/api/exchangerates/tables/a/?format=json';
fetch(currenciesTable, {
    method: "get"
}).then(response => response.json()).then(json => console.log(json[0].rates))

selectElement.addEventListener('change', (event) => {
    let url = "http://api.nbp.pl/api/exchangerates/rates/a/" + event.target.value + "/?format=json"
    fetch(url, {
        method: "get"
    }).then(response => response.json()).then(json =>
        result.textContent = document.querySelector('#valueToCalculate').value * json.rates[0].mid).catch((error) => {
        console.error('Error:', error);
    });
});