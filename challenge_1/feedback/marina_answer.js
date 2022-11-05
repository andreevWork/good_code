/**
 * What is good:
 * - change multiple arguments to object 
 * - array zodiacSigns and using includes
 * - creating semantics for actions using good naming functions
 * 
 * What could be better:
 * - not making destruction right in function's argument place
 * - bad naming for setPerson function, it doesnt set anything, it returns persona string, so name should be getPersonaByScore or something like that
 */

 const pointsBirthDate = birthDate => {
	const wasBornAfter2000 = birthDate.getFullYear() > 2000;
	const wasBornBefore1990 = birthDate.getFullYear() < 1990;
	const wasBornBefore1980 = birthDate.getFullYear() < 1980;

	if (wasBornAfter2000) {
		return 100;
	} else {
		if (wasBornBefore1990) {
			return 50;
		} else if (wasBornBefore1980) {
			return 10;
		} else {
			return 0;
		}
	}
};

const pointsHobbies = (likesSmoothie, hasBMW) => {
	if (likesSmoothie) {
		return 50;
	} else if (hasBMW) {
		return 10;
	} else {
		return 10;
	}
};

const pointsZodiac = zodiacSign => {
	const zodiacSigns = ['Scorpio', 'Gemini', 'Virgo', 'Leo'];
	return zodiacSigns.includes(zodiacSign) ? 50 : 10;
};

const setPersona = personaScore => {
	if (personaScore < 200 && personaScore > 170) {
		return 'Pony';
	} else if (personaScore > 200) {
		return 'Star';
	}
	if (personaScore < 150 && personaScore > 100) {
		return 'Doomer';
	} else if (personaScore > 150) {
		return 'Zoomer';
	} else {
		return 'Boomer';
	}
};

const getPersona = person => {
	const { firstName, lastName, zodiacSign, birthDate, likesSmoothie, hasBMW } = person;

	const personaScore =
		pointsBirthDate(birthDate) + pointsHobbies(likesSmoothie, hasBMW) + pointsZodiac(zodiacSign);
	const persona = setPersona(personaScore);
	return `${firstName} ${lastName} you are ${persona}!`;
};

const person1 = {
	firstName: 'Bob',
	lastName: 'Smith',
	zodiacSign: 'Leo',
	birthDate: new Date('1995-12-17T00:24:00'),
	likesSmoothie: false,
	hasBMW: false,
};

const person2 = {
	firstName: 'John',
	lastName: 'Black',
	zodiacSign: 'Aries',
	birthDate: new Date('2001-10-17T00:24:00'),
	likesSmoothie: true,
	hasBMW: true,
};

const person3 = {
	firstName: 'Kate',
	lastName: 'Candy',
	zodiacSign: 'Scorpio',
	birthDate: new Date('1956-10-11T00:24:00'),
	likesSmoothie: false,
	hasBMW: true,
};

const person4 = {
	firstName: 'John',
	lastName: 'Black',
	zodiacSign: 'Gemini',
	birthDate: new Date('2005-10-17T00:24:00'),
	likesSmoothie: true,
	hasBMW: true,
};
console.log(getPersona(person1) === 'Bob Smith you are Boomer!');
console.log(getPersona(person2) === 'John Black you are Zoomer!');
console.log(getPersona(person3) === 'Kate Candy you are Doomer!');