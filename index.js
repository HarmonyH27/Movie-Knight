let themeButton = document.querySelector('#theme-button');
let rsvpButton = document.querySelector('#rsvp-button');

const participantBox = document.querySelector('.rsvp-participants');

//  Dark Toggle //
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

//  Add Participant //
const addParticipant = (person) =>{
    
    //let name = document.querySelector('#rsvp-name').value;
    //let city = document.querySelector('#rsvp-city').value;

    const rsvpInput = document.createElement("p");
    rsvpInput.innerText = "🎟️" + person.name + " from " +  person.city + " has RSVP'd";   
    participantBox.appendChild(rsvpInput);
}

//  Validate Form //
const validateForm = () => {

    let containsErrors = false;

    var rsvpInputs = document.querySelector("#rsvp-form").elements;

    let person = {
        name: rsvpInputs[0].value,
        hometown: rsvpInputs[1].value,
        email: rsvpInputs[2].value
    };

    for(let i = 0; i < rsvpInputs.length; i++)
    {
        if(rsvpInputs[i].value.length < 2)
        {
            containsErrors = true;
            rsvpInputs[i].classList.add("error");
        }else{
            rsvpInputs[i].classList.remove("error");
        }
    }

    if(containsErrors == false)
    {
        addParticipant(person);

        for(let j = 0; j < rsvpInputs.length; j++)
            {
                rsvpInputs[j].value = "";
            }
    }
}

themeButton.addEventListener('click', toggleDarkMode);
rsvpButton.addEventListener('click', validateForm);


