const form = document.querySelector('form')

form.addEventListener('submit', getRandomQuote)

function getRandomQuote(e) {
  e.preventDefault()
  fetch('http://localhost:3000/quotes/random')
    .then(resp => resp.json())
    .then(quote => document.getElementById('text').innerHTML = quote.name)
}
