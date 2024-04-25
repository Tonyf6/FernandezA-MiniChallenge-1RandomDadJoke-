const jokeText = document.getElementById('joke-text');
const refreshBtn = document.getElementById('refresh-btn');


const fetchJoke = async () => {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        jokeText.textContent = data.joke;
    } catch (error) {
        jokeText.textContent = 'Error';
    }
};


refreshBtn.addEventListener('click', fetchJoke);


fetchJoke();
