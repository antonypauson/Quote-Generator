document.addEventListener("DOMContentLoaded", function() {
    const quote = document.querySelector("#quote");
    const author = document.querySelector("#author");
    document.querySelector("button").onclick = () => {
        getQuote(quote,author);
    }
})

async function getQuote(quote,author) {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        // quote.textContent = data.content;
        // author.textContent = data.author;
        alert(data.content)
    }
    else {
        quote.textContent = "An error occured. Sorry";
    }
}

