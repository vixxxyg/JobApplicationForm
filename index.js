const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");
const jobTitle = document.getElementById("jobTitle");
const yearsExperience = document.getElementById("yearsExperience");
const skills = document.getElementById("skills");
const highestDegree = document.getElementById("highestDegree");
const errorMessagesDiv = document.getElementById("errorMessages");
const steps = document.querySelectorAll(".step");

let errorMsgs = [];
let currentStep = 1;

function nextStep() {
    errorMsgs = [];
    errorMessagesDiv.innerText = "";
  
    switch (currentStep) {
      case 1:
        addValidationErrors(name, email, phone);
        validateStep(errorMsgs);
        break;
  
      case 2:
        addValidationErrors(company, jobTitle, yearsExperience);
        validateStep(errorMsgs);
        break;
  
      case 3:
        addValidationErrors(skills, highestDegree);
        validateStep(errorMsgs);
        break;
    }
  }

  function addValidationErrors(fieldOne, fieldTwo, fieldThree = undefined) {
    if (!fieldOne.checkValidity()) {
      const label = document.querySelector(`label[for="${fieldOne.id}"]`);
      errorMsgs.push(`Please Enter A Valid ${label.textContent}`);
    }
  
    if (!fieldTwo.checkValidity()) {
      const label = document.querySelector(`label[for="${fieldTwo.id}"]`);
      errorMsgs.push(`Please Enter A Valid ${label.textContent}`);
    }
  
    if (fieldThree && !fieldThree.checkValidity()) {
      const label = document.querySelector(`label[for="${fieldThree.id}"]`);
      errorMsgs.push(`Please Enter A Valid ${label.textContent}`);
    }
  
    if (errorMsgs.length > 0) {
      errorMessagesDiv.innerText = errorMsgs.join("\n");
    }
  }
  
  function validateStep(errorMsgs) {
    if (errorMsgs.length === 0) {
      showStep(currentStep + 1);
    }
  }
  
  function showStep(step) {
    steps.forEach((el, index) => {
      el.hidden = index + 1 !== step;
    });
    currentStep = step;
  }

  function previousStep() {
    errorMessagesDiv.innerText = "";
    showStep(currentStep - 1);
  }