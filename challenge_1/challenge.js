function getPersona(firstName, lastName, zodiacSign, birthDate, likesSmoothie, hasBMW) {
    const wasBornAfter2000 = birthDate.getFullYear() > 2000;
    const wasBornBefore1990 = birthDate.getFullYear() < 1990;
    const wasBornBefore1980 = birthDate.getFullYear() < 1980;
    let personaScore = 0;
    let persona;

    if (wasBornAfter2000) {
        personaScore += 100;
    } else if (wasBornBefore1990) {
        personaScore += 50;
    } else if (wasBornBefore1980) {
        personaScore += 10;
    }

    if (likesSmoothie) {
        personaScore += 50;
    } else if (hasBMW) {
        personaScore += 10;
    } else if (!hasBMW && likesSmoothie) {
        personaScore += 50;
    } else if (hasBMW && likesSmoothie) {
        personaScore += 100;
    } else if (!hasBMW && !likesSmoothie) {
        personaScore += 10;
    }

    if (zodiacSign === 'Scorpio' || zodiacSign === 'Gemini' || zodiacSign === 'Virgo' || zodiacSign === 'Leo') {
        personaScore += 50;
    } else {
        personaScore += 10;
    }

    if (personaScore > 150) {
        persona = 'Zoomer';
    } else if(personaScore > 100) {
        persona = 'Doomer';
    } else {
        persona = 'Boomer';
    }

    return firstName + ' ' + lastName + ' you are ' + persona + '!';
}

/**
 * For running just type "node ./challenge.js" command in your terminal
 * 
 * Your task is add new personas:
 * - "Pony" if score higher than 170
 * - "Star" if score higher that 200
 */

console.log(getPersona('Bob', 'Smith', 'Leo', new Date('1995-12-17T00:24:00'), false, false) === 'Bob Smith you are Boomer!');
console.log(getPersona('John', 'Black', 'Aries', new Date('2001-10-17T00:24:00'), true, true) === 'John Black you are Zoomer!');
console.log(getPersona('Kate', 'Candy', 'Scorpio', new Date('1956-10-11T00:24:00'), false, true) === 'Kate Candy you are Doomer!');