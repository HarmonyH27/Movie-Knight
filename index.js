let themeButton = document.querySelector('#theme-button');
let rsvpButton = document.querySelector('#rsvp-button');

const participantBox = document.querySelector('.rsvp-participants');

//  Dark Toggle //
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

//  Add Participant //
const addParticipant = () =>{
    
    let name = document.querySelector('#rsvp-name').value;
    let city = document.querySelector('#rsvp-city').value;

    const rsvpInput = document.createElement("p");
    rsvpInput.innerText = "🎟️" + name + " from " +  city + " has RSVP'd";   
    participantBox.appendChild(rsvpInput);
}

//  Validate Form //
const validateForm = () => {

    let containsErrors = false;

    var rsvpInputs = document.querySelector("#rsvp-form").elements;

    for(let i = 0; i < rsvpInputs.length; i++)
    {
        if(rsvpInputs[i].value.length < 2)
        {
            //console.log(rsvpInputs[i]);
            containsErrors = true;
            rsvpInputs[i].classList.add("error");
        }
        else if(rsvpInputs <= 2)
        {
            rsvpInputs[i].classList.remove("error");
        }
    }

    if(containsErrors == false)
    {
        addParticipant();

        for(let j = 0; j < rsvpInputs.length; j++)
            {
                rsvpInputs[j].value = "";
            }
    }
}

themeButton.addEventListener('click', toggleDarkMode);
rsvpButton.addEventListener('click', validateForm);


