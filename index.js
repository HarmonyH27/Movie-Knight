
// Dark Toggle

let themeButton = document.querySelector('#theme-button');

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    console.log("button clicked!");
}

themeButton.addEventListener('click', toggleDarkMode);


