var user;
user = "Elí";

console.log(user);

function getWelcomeMessage (message) {
    if(message) {
        console.log(message + " " + user);
    } else {
        console.log("Hola " + user);
    }
}

getWelcomeMessage();