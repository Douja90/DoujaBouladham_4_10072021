/* icon menu (responsive) */

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  document.querySelector("#icon").addEventListener("click", editNav); 

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

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); 

function launchModal() { // launch modal form
    modalbg.style.display = "flex";
}

closeModalBtn.addEventListener("click", closeModal); 

function closeModal() { 
    modalbg.style.display = "none";
    form.style.display = "block";
    confirmationValidation.style.display = "none";
} 


/* Form Validator */

// first name validation 
function validateFirstName(firstName) { 
    if (firstName.value.trim().length < 2) {
        errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        errorFirstName.style.display = "inline-block";
        firstName.style.border = "solid #FE142F 3px";
        return false; 
    } else {
        errorFirstName.style.display = "none";
        firstName.style.border = "solid #279E7A 2px";
        return true;
    }
}

// last name validation 
function validateLastName(lastName) { 
    if (lastName.value.trim().length < 2) {
        errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
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
        errorEmail.innerText = "Veuillez entrer un E-mail valide.";
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
    if (!/^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/g.test(birthDate.value)) {
        errorBirthDate.innerText = "Veuillez entrer votre date de naissance.";
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
        errorEventQuantity.innerText = "Veuillez indiquer le nombre de participants à nos tournois.";
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
        errorEventLocation.innerText = "Vous devez choisir une option.";
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
        errorConditionsOfUse.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
        errorConditionsOfUse.style.display = "inline-block";
        return false;
    } else {
        errorConditionsOfUse.style.display = "none";
        return true;
    };
}


/* Form Validator */

// global validation msg
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
        form.style.display = "none"; 
        confirmationValidation.style.display = "flex"; 
    }
    else{
        document.querySelector("#form").addEventListener("click", validate);
    }
}


/* Send Form */

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validate();
    document.getElementById("form").reset(); 
});


/* Close  Message */

document.querySelector("#btn-closed").addEventListener("click", closeModal); 

