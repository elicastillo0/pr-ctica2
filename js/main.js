let user;
const defaultMessage = "Hola";
user = "Elí";

console.log(user);

function getWelcomeMessage (message) {
    if(message) {
        console.log(message + " " + user);
    } else {
        let auxVariable = "Ejemplo";
        console.log(defaultMessage + user);
    }
    console.log(auxVariable); // Error
}

getWelcomeMessage(); 