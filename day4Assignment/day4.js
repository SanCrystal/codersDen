
/**
 * LEVEL 1
 */ 

// Number 1
const yourAge = parseInt(prompt('Enter your age'));
const year = new Date.getFullYear();
if (yourAge < 18){
    console.log(`You are left with ${18 - yourAge} years to drive`)
}else if (yourAge >= 18){
    console.log(`You are old enough to drive`);
}

// Number 2
const yourage = parseInt(prompt('Enter your age'));

const myage = 25;

if(myage < yourAge){
    console.log(`You are ${Math.abs(myage - yourage)} years older than me)}`)
}else{
    console.log(`I am ${Math.abs(myage - yourage)} years older than you)}`)
}


//Number 3
let a = 4;
let b = 3;
// i
if (a > b){
    console.log(`${a} is greater ${b}`)
    }else{
    console.log(`${b} is greater ${a}`)
}

// ii
a > b? console.log(`${a} is greater ${b}`): console.log(`${b} is greater ${a}`)

// Number 4
let input = parseFloat(prompt("Enter a number: "));
if (input % 2 ==0){
    console.log(`${input} is an even number`);
}else {
    console.log(`${input} is an odd number`);
}

/**
 * LEVEL 2
 */ 

// Number 1

let scores = parseFloat(prompt("Enter a score: "));
if(scores >= 80){
    console.log('A');
}else if(scores >=70 && scores <80){
    console.log('B');
}else if(scores >=60 && scores <70){
    console.log('C');
}else if(scores >=50 && scores <60){
    console.log('D');
}else if(scores <50){
    console.log('F');
}else{
    console.log('Invalid score')
}

// Number 2
const month = prompt('Enter a month').toLowerCase();
switch(month){
    case 'september':
    case 'october':
    case 'november':
        console.log("Autumn");
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log("Winter");
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log("Spring");
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log("Summer");
        break;
    default:
        console.log("Invalid Month");
}

// Number 3

const newdateInput = prompt('What is the day today?')
switch (newdateInput.toLowerCase()){
    case 'sunday':
    case 'saturday':
        console.log(`${newdateInput} is a Weekend.`);
        break;
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${newdateInput} is a working day.`);
        break;
    default:
        console.log("Invalid day");
       
}

/**
 * LEVEL 3
 */

const numofdays = prompt('Enter a Month');
const leapYear = prompt('Enter a leap year: yes or no').toLowerCase();
switch(numofdays.toLowerCase()){
    case 'january':
    case 'march':
    case'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${numofdays} has 31 days.}`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${numofdays} has 30 days.}`);
        break;
    case 'february':
        console.log(`${numofdays} has ${leapYear.toLowerCase() == 'yes'? 29:28} days.}`);
        break;
    default:
        console.log(`${numofdays} is not a valid day.`);
}