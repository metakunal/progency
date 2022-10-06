let quoteText = document.getElementById('quote')
let author = document.getElementById('author')
let btn = document.getElementById('btn')

function randQuote(){
    btn.classList.add("loading")
    btn.innerHTML="Loading Quote....";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=> {
        quoteText.innerText = result.content
        author.innerHTML = result.author
        btn.innerHTML = "New Quote"
    })
}

btn.addEventListener("click", randQuote)
