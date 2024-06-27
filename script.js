// script.js
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementsByName('First Name')[0].value;
    const lastName = document.getElementsByName('Last Name')[0].value;
    const phoneNumber = document.getElementsByName('Phone Number')[0].value;
    const emailId = document.getElementsByName('Email ID')[0].value;

    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
    alert(alertMessage);
});