/* icon menu (responsive) */

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

/* Elements DOM  */

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const form = document.querySelector(".form");
console.log(form);


// elements in the modal
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const eventQuantity = document.querySelector("#quantity");
const eventLocation = document.querySelectorAll(".checkbox-input[name='location']");
const conditionsOfUse = document.querySelector("#checkbox1");

// elements in the modal  errors
const errorFirstName = document.querySelector("#error-first");
const errorLastName = document.querySelector("#error-last");
const errorEmail = document.querySelector("#error-email");
const errorBirthDate = document.querySelector("#error-birthdate");
const errorEventQuantity = document.querySelector("#error-eventquantity");
const errorEventLocation = document.querySelector("#error-eventlocation");
const errorConditionsOfUse = document.querySelector("#error-conditionsofuse");

// element present for the validation message
const confirmationValidation = document.querySelector("#modal-confirm");


/* launch and close Modal Form */

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // launch modal event

function launchModal() { // launch modal form
    modalbg.style.display = "flex";
}

closeModalBtn.addEventListener("click", closeModal); // close modal event

function closeModal() { // close modal form
    modalbg.style.display = "none";
    form.style.display = "block";
    confirmationValidation.style.display = "none";
} 


/* Form Validator */

// first name validation 
function validateFirstName(firstName) { 
    if (firstName.value.trim().length < 2) {
        errorFirstName.innerText = "Please enter at least 2 characters for the First Name field.";
      
        return false;  errorFirstName.style.display = "inline-block";
        firstName.style.border = "solid #FE142F 3px";
    } else {
        errorFirstName.style.display = "none";
        firstName.style.border = "solid #279E7A 2px";
        return true;
    }
}

// last name validation 
function validateLastName(lastName) { 
    if (lastName.value.trim().length < 2) {
        errorLastName.innerText = "Please enter at least 2 characters for the Last Name field.";
        errorLastName.style.display = "inline-block";
        lastName.style.border = "solid #FE142F 3px";
        return false;
    } else {
        errorLastName.style.display = "none";
        lastName.style.border = "solid #279E7A 3px";
        return true;
    }
}

// email validation
function validateEmail(email) { 
    if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,10}$/g.test(email.value)) {
        errorEmail.innerText = "Please enter a valid email.";
        errorEmail.style.display = "inline-block";
        email.style.border = "solid #FE142F 2px";
        return false;
    } else {
        errorEmail.style.display = "none";
        email.style.border = "solid #279E7A 2px";
        return true;
    }
}

// validation of birth date 
function validateBirthDate(birthDate) { 
    if (!/^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/g.test(birthDate.value) & this.birthdate <=0) {
        errorBirthDate.innerText = "Please enter your date of birth.";
        errorBirthDate.style.display = "inline-block";
        birthDate.style.border = "solid #FE142F 3px";
        return false;
    } else {
        errorBirthDate.style.display = "none";
        birthDate.style.border = "solid #279E7A 3px";
        return true;
    }
}

// quantity events validation 
function validateEventQuantity(eventQuantity) { 
    if (!/\d/g.test(eventQuantity.value)) {
        errorEventQuantity.innerText = "Please indicate the number of participants in our tournaments.";
        errorEventQuantity.style.display = "inline-block";
        eventQuantity.style.border = "solid #FE142F 2px";
        return false;
    } else {
        errorEventQuantity.style.display = "none";
        eventQuantity.style.border = "solid #279E7A 2px";
        return true;
    }
}

// validation  of location 
function validateEventLocation(eventLocation) { 
    let eventLocationChecked = 0;


    eventLocation.forEach(location => {
        if (location.checked) {
            eventLocationChecked = 1;
        }
    })

    if (eventLocationChecked === 0) {
        errorEventLocation.innerText = "Please select a location.";
        errorEventLocation.style.display = "inline-block";
        return false;
    } else {
        errorEventLocation.style.display = "none";
        return true;
    };
}

// conditions of use validation
function validateConditionsOfUse(conditionsOfUse) { 
    if (!conditionsOfUse.checked) {
        errorConditionsOfUse.innerText = "Please accept the terms and conditions of use.";
        errorConditionsOfUse.style.display = "inline-block";
        return false;
    } else {
        errorConditionsOfUse.style.display = "none";
        return true;
    };
}


/* Form Validator */

// global validation 
function validate() { 
    let isFormValidate = [];

    isFormValidate.push(validateFirstName(firstName));
    isFormValidate.push(validateLastName(lastName));
    isFormValidate.push(validateEmail(email));
    isFormValidate.push(validateBirthDate(birthDate));
    isFormValidate.push(validateEventQuantity(eventQuantity));
    isFormValidate.push(validateEventLocation(eventLocation));
    isFormValidate.push(validateConditionsOfUse(conditionsOfUse));

    if (!isFormValidate.includes(false)) {
        form.style.display = "none"; // remove form
        confirmationValidation.style.display = "flex"; // show validation message
    }
}


/* Send Form */

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validate();
});


/* Close  Message */

document.querySelector("#btn-closed").addEventListener("click", closeModal); 

