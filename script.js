document.getElementById('convert').addEventListener('click', async function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    try {
        // Fetch exchange rates
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];

        // Perform conversion
        const result = (amount * rate).toFixed(2);

        // Display the result
        document.getElementById('result').innerText = `Converted Amount: ${result} ${toCurrency}`;
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        alert("Unable to fetch exchange rates. Please try again later.");
    }
});
