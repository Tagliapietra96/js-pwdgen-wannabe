const userFirstName = prompt("Scrivi il tuo nome");
const userLastName = prompt("Scrivi il tuo cognome");
const userColor = prompt("Scrivi il tuo colore preferito");

const userName = document.getElementById("user_name");
userName.innerHTML = `Benvenuto ${userFirstName} ${userLastName}!`;

const userPassword = document.getElementById("password");
userPassword.innerHTML = `${userFirstName}${userLastName}${userColor}21`;