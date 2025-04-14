const name = require('./name.js');

const hobby = require('./hobbies.js');

function person() {
    
    const fullName = name("Davide", "DelGiudice");
    
    const hobbies = hobby("videogiochi", "serieTV", "dnd");

    return fullName, hobbies;
}

console.log(person());