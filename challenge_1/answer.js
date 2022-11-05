/**
 * Constants section starts
 */

const ZodiacSignsForMediumPoints = ['Scorpio', 'Gemini', 'Virgo', 'Leo'];

const PointsAmount = {
    big: 100,
    medium: 50,
    small: 10,
};

const PersonasAndScoreThreshold = {
    'Star': 200,
    'Pony': 170,
    'Zoomer': 150,
    'Doomer': 100,
    'Boomer': 0,
};

/**
 * Constants section ends
 */

function isDateYearLargerThanGiven(date, yearToCheck) {
    return date.getFullYear() > yearToCheck;
}

function getPointsByBirthDate(birthDate) {
    if (isDateYearLargerThanGiven(birthDate, 2000)) {
        return PointsAmount.big;
    } else if (!isDateYearLargerThanGiven(birthDate, 1990)) {
        return PointsAmount.medium;
    } else if (!isDateYearLargerThanGiven(birthDate, 1980)) {
        return PointsAmount.small;
    }

    return 0;
}

function getMediumOrSmallPointsAmountByBoolean(condition) {
    return condition ? PointsAmount.medium : PointsAmount.small;
}

function getPersona({
    firstName, 
    lastName, 
    zodiacSign, 
    birthDate, 
    likesSmoothie
}) {
    let persona;
    let personaScore =
        getPointsByBirthDate(birthDate) +
        getMediumOrSmallPointsAmountByBoolean(likesSmoothie) +
        getMediumOrSmallPointsAmountByBoolean(ZodiacSignsForMediumPoints.includes(zodiacSign));

    for (const [personaName, scoreThreshold] of Object.entries(PersonasAndScoreThreshold)) {
        if (personaScore > scoreThreshold) {
            persona = personaName;
            break;
        }
    }

    return `${firstName} ${lastName} you are ${persona}!`;
}

console.log(getPersona({
    firstName: 'Bob',
    lastName: 'Smith',
    zodiacSign: 'Leo',
    birthDate: new Date('1995-12-17T00:24:00'),
    likesSmoothie: false
}) === 'Bob Smith you are Boomer!');

console.log(getPersona({
    firstName: 'John',
    lastName: 'Black',
    zodiacSign: 'Aries',
    birthDate: new Date('2001-10-17T00:24:00'),
    likesSmoothie: true
}) === 'John Black you are Zoomer!');

console.log(getPersona({
    firstName: 'Kate',
    lastName: 'Candy',
    zodiacSign: 'Scorpio',
    birthDate: new Date('1956-10-11T00:24:00'),
    likesSmoothie: false
}) === 'Kate Candy you are Doomer!');

console.log(getPersona({
    firstName: 'Elena',
    lastName: 'Beer',
    zodiacSign: 'Scorpio',
    birthDate: new Date('2007-10-11T00:24:00'),
    likesSmoothie: true
}) === 'Elena Beer you are Pony!');