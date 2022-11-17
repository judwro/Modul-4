console.log("Hello!");

let amountElement = document.querySelector(".js-amount")
let formElement = document.querySelector(".js-form")
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result")



let rateEUR = 4.72;
let rateUSD = 4.74;
let rateCHF = 4.79;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;
    }

    resultElement.innerHTML = `${amount} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;


});



