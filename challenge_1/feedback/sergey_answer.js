/**
 * What is good:
 * - change multiple arguments to object 
 * - array zodiacSigns and using includes
 * - creating semantics for actions using good naming functions
 * 
 * What could be better:
 * - not making destruction right in function's argument place
 * - not using template literals for return final string
 * - function checkBirthDate has wrong logic, initial function has another
 * - function checkHabits has wrong logic, initial function has another
 * - function setPerson has dificult if conditions, check guard clauses pattern - https://betterprogramming.pub/refactoring-guard-clauses-2ceeaa1a9da
 * - bad naming for setPerson function, it doesnt set anything, it returns persona string, so name should be getPersonaByScore or something like that
 */

const checkBirthDate = (birthDate) => {
    const wasBornAfter2000 = birthDate.getFullYear() > 2000;
    const wasBornBefore1990 = birthDate.getFullYear() < 1990;
    const wasBornBefore1980 = birthDate.getFullYear() < 1980;
    
    if (wasBornAfter2000) {
      return 100;
    } else {
      if (wasBornBefore1990 && !wasBornBefore1980) {
        return 50;
      } else {
        return 10;
      }
    }
  };
  
  const checkHabits = (likesSmoothie, hasBMW) => {
    if (likesSmoothie) {
      if (hasBMW) {
        return 150;
      } else {
        return 100;
      }
    } else {
      if (hasBMW) {
        return 10;
      } else {
        return 10
      }
    }
  };
  
  const zodiacSigns = ["Scorpio", "Gemini", "Virgo", "Leo"];
  const checkZodiacSign = (zodiacSign) => zodiacSigns.includes(zodiacSign) ? 50 : 10;
    
  const setPerson = (personaScore) => {
    if (personaScore < 200) {
      if (personaScore < 170) {
        if (personaScore < 150) {
          if(personaScore > 100) {
            return "Doomer";
          } else {
            return 'Boomer'
          }
        } else {
          return "Zoomer";
        }
      } else {
        return "Pony";
      }
    } else {
      return "Star";
    }
  };
  
  function getPersona(person) {
    const { firstName, lastName, zodiacSign, birthDate, likesSmoothie, hasBMW } = person;
      
    const personaScore = checkBirthDate(birthDate) + checkHabits(likesSmoothie, hasBMW) + checkZodiacSign(zodiacSign);
    const persona = setPerson(personaScore);
  
    return firstName + " " + lastName + " you are " + persona + "!";
  }
  
  const person = {
    firstName: "Bob",
    lastName: "Smith",
    zodiacSign: "Leo",
    birthDate: new Date("1995-12-17T00:24:00"),
    likesSmoothie: false,
    hasBMW: false,
  };
  
  console.log(getPersona(person) === "Bob Smith you are Boomer!");
  