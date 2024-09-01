document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Why join the navy when you can be a pirate?",
        "Momento Mori",
        "You miss 100% of the shots you don't take",
        "I saw, I came, I conquered"
    ]
    const quote = document.querySelector("#quote");
    const author = document.querySelector("#author"); //we still don't use it here
    document.querySelector("button").onclick = () => {
        quote.innerHTML = generateQuote(quotes);
    }
})

function generateQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}



