var user;
user = "Elí";

console.log(user);

function getWelcomeMessage (message) {
    if(message) {
        console.log(message + " " + user);
    } else {
        var message = "Hola ";
        console.log(message + user);
    }
    console.log(message);
    admin = "Elí";
}

getWelcomeMessage();
console.log(admin);