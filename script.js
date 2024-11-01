const api_url = "Your api comes here";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Function for generating the quote.
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML+ "---by" +author.innerHTML,"Tweet Window","width=600","height=300");
}