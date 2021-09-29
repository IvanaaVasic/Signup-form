const submitButton = document.querySelector(".button");

function submitForm() {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const textFields = document.getElementsByClassName("text-field");
  const errorMessages = document.getElementsByClassName("error-message");

  for (let i = 0; i < textFields.length; i++) {
    if (textFields[i].value == "") {
      errorMessages[i].classList.remove("hidden");
      textFields[i].classList.add("error");
      errorMessages[i].innerText = `${textFields[i].dataset.name} cannot be empty.`;
    } else if (textFields[i].dataset.name == "Email" && !emailRegex.test(textFields[i].value)) {
      errorMessages[i].classList.remove("hidden");
      textFields[i].classList.add("error-email");
      textFields[i].value = "";
      textFields[i].placeholder = "email@example/com";
      errorMessages[i].innerText = "Looks like this is not an email!";
    } else {
      errorMessages[i].classList.add("hidden");
      textFields[i].classList.remove("error");
    }
  }
}

submitButton.addEventListener("click", submitForm);
