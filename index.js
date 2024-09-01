document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Why join the navy when you can be a pirate?",
        "Momento Mori",
        "You miss 100% of the shots you don't take",
        "I saw, I came, I conquered"
    ]
    const quote = document.querySelector("#quote");
    const author = document.querySelector("#author"); //we still don't use it here
    const usedIndex = new Set();
    document.querySelector("button").onclick = () => {
        quote.innerHTML = generateQuote(quotes, usedIndex);
    }
})

function generateQuote(quotes,usedIndex) {
    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        
        if (usedIndex.has(randomIndex)) continue;

        usedIndex.add(randomIndex);
        return quotes[randomIndex];
    }
    
}



