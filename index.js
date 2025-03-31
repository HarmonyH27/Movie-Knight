
// Dark Toggle

let themeButton = document.querySelector('#theme-button');
let rsvpButton = document.querySelector('#rsvp-button');

let count = 3;

const participantBox = document.querySelector('.rsvp-participants');


const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

const addParticipant = (event) =>{
    
    let name = document.querySelector('#name').value;
    let city = document.querySelector('#city').value;


    if((name == '') || (city == '')){
        return;
    }else{
        const rsvpInput = document.createElement("p");
        rsvpInput.innerText = "🎟️" + name + " from " +  city + " has RSVP'd";   
        participantBox.appendChild(rsvpInput);

        //Clear field
        document.querySelector('#name').value = '';
        document.querySelector('#city').value = '';
        document.querySelector('#email').value = '';

    }


    event.preventDefault();

}

themeButton.addEventListener('click', toggleDarkMode);
rsvpButton.addEventListener('click', addParticipant)


