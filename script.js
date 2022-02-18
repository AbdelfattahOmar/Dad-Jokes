const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
  const config = {
    headers: {
      Accept: 'Application/json',
    },
  }

  fetch('https://icanhazdadjoke.com/', config)
    .then((response) => response.json())
    .then((data) => {
      joke.innerHTML = data.joke
    })
}
