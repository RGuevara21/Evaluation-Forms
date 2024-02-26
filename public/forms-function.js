// script.js

function navigateTo(page) {
  window.location.href = page;
}

function clearForm() {
  // Code to clear/reset form elements
  // Example: Assuming radio buttons have the name "radio-group"
  var radioButtons = document.getElementsByName("radio-group");
  radioButtons.forEach((button) => (button.checked = false));
}

function submitCstForm() {
  // Code to handle submission of CST form
  // Add your form submission logic here
  alert("CST Form submitted!");
}
