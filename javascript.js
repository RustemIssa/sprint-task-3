function convertCurrency(currency) {
    let amount = document.getElementById('amount').value;
    let fromKZT = '-';
    let fromUSD = '-';
    let fromEUR = '-';
    let toUSD = (amount * (1 / 431)).toFixed(2);
    let toEUR = (amount * (1 / 509)).toFixed(2);

    if (currency === 'toKZT') {
        document.getElementById('fromKZT').value = fromKZT;
        document.getElementById('fromUSD').value = toUSD;
        document.getElementById('fromEUR').value = toEUR;
    } else if (currency === 'toUSD') {
        document.getElementById('fromKZT').value = (amount * 431).toFixed(2);
        document.getElementById('fromUSD').value = fromUSD;
        document.getElementById('fromEUR').value = (amount * 0.93).toFixed(2);
    } else if (currency === 'toEUR') {
        document.getElementById('fromKZT').value = (amount * 509).toFixed(2);
        document.getElementById('fromUSD').value = (amount * 1.08).toFixed(2);
        document.getElementById('fromEUR').value = fromEUR;
    }
}