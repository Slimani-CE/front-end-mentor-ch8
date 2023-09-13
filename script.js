function submitEmail(event) {
  event.preventDefault();
  let emailInput = document.querySelector(".email-div input");
  let errorMsg = document.querySelector(".content-body .error-msg");
  let errorIcon = document.querySelector(".email-div .icon-error");
  // Check the email
  let regex = /^\w+@\w+\.\w+$/gi;
  if (regex.test(emailInput.value)) {
    // If email valid...
    console.log("TRUE");
    emailInput.classList.remove("error-email");
    errorIcon.classList.add("hidden");
    errorMsg.classList.add("hidden");
  } else {
    // If email is not valid
    // Change input style
    emailInput.classList.add("error-email");
    // Display error icon and error message
    errorIcon.classList.remove("hidden");
    errorMsg.classList.remove("hidden");
  }
}
