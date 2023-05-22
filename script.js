const apiUrl = 'https://api.chucknorris.io/jokes/random'

const jokeEl = document.querySelector('.jokeEl')
const jokeBtn = document.querySelector('.jokeBtn')

async function getJoke() {
    const res = await fetch(apiUrl)
    const data = await res.json()
    jokeEl.innerText = data.value
    jokeEl.style.fontSize = '26px'
}


jokeBtn.addEventListener('click', getJoke)
document.addEventListener('DOMContentLoaded', getJoke)
