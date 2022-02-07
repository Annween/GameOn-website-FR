function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") { // permet de changer la classe d'un élément HTML
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
//Récupération des éléments du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal2 = document.querySelector("#confirm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//close modal form
function closeModal() {
    modalbg.style.display = "none";
}


function closeModal2() {
    document.getElementById('confirm').style.display = "none";
}

const email = document.getElementById('email');
const prenom = document.getElementById('first');
const nom = document.getElementById('last');
const birthdate = document.getElementById('birthdate');
const privacyConsent = document.getElementById('checkbox1');
const quantity = document.getElementById('quantity');

const nomError = document.getElementById('nomError');
const prenomError = document.getElementById('prenomError');

const birthdateError = document.getElementById('birthdateError');

const consentError = document.getElementById('consentError');

const checkBoxError = document.getElementById('checkBoxError');

const emailError = document.getElementById('emailError');

const quantityError = document.getElementById('quantityError');

document.getElementById("button_sumit").addEventListener("click", function (e) {

    e.preventDefault();

    let isOk = true;


    if (prenom.value.length < 2) {
        prenomError.style.display = "block";
        isOk = false;

    }else
    {
        prenomError.style.display = "none";
    }
    if (nom.value.length < 2) // check
    {
        nomError.style.display = "block";
        isOk = false;

    } else
    {
        nomError.style.display = "none";
    }

    if (validateEmail(email.value) === false) {
        emailError.style.display = "block";
        isOk = false;
    } else
    {
        emailError.style.display = "none";
    }

    if (birthdate.value === '') {
        birthdateError.style.display = "block";
        isOk = false;

    } else
    {
        birthdateError.style.display = "none";
    }

    if (quantity.value === '') {
        quantityError.style.display = "block";
        isOk = false;
    } else
    {
        quantityError.style.display = "none";
    }

    // check if CGU checkbox is checked
    if (privacyConsent.checked === false) {
        consentError.style.display = "block";
        isOk = false;
    } else
    {
        consentError.style.display = "none";
    }

    // get all location radio inputs and checks if at least one is checked
    if (document.querySelectorAll('input[name="location"]:checked').length < 1) {
        checkBoxError.style.display = "block";
        isOk = false;
    } else
    {
        checkBoxError.style.display = "none";
    }

    // check if inputs are valid and submit
    if (isOk !== false) {
       modalbg.style.display = 'none';
        document.getElementById("confirm").style.display = "block";
    }
})


//check email by using regex
function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase()); // test method returns bool value
}







