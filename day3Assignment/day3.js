/**
 * LEVEL 1
 */ 
//Number 1
let firstName='Anna', lastName='Bryan', country='Portorico', city='Vlashem', age=30, isMarried=false, year=2020;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Number 2
console.log(typeof '10' == 10);

//Number 3
console.log(parseInt('9.8') == 10);

//Number 4
//truthy i
console.log(9>5);
console.log( typeof firstName === typeof country);
console.log(typeof isMarried === 'boolean');

//falsey ii
console.log(1===0);
console.log('' === null);
console.log(null === undefined);


//Number 5

// i   4>3
true

// ii  4>=3
true

// iii  4<3
false

// iv  4<=3
false

// v  4==4
true

//vi  4===4
true

//vii  4!=4
false

//viii  4!==4
false

//ix 4!= '4'
false

// x 4=='4'
true

//xi 4==='4'
false

// xii 
console.log('python'.length !== 'jargon'.length);

// Number 6
// i   4 > 3 && 10 < 12
true

// ii   4 > 3 && 10 > 12
false

//  iii  4 > 3 || 10 < 12
true

// iv   4 > 3 || 10 > 12
true

// v  !(4 > 3)
false

//vi !(4 <3)
true

//vii   !(false)
true

//viii !(4 > 3 && 10 < 12)
false

//ix   !(4 > 3 && 10 > 12)
true

//x  !(4 === '4')
true

// xi    There is no 'on' in both dragon and python
false

// Number 7
const now = new Date();
//i 
console.log(now.getFullYear());

// ii
console.log(now.getMonth() +1);

// iii
console.log(now.getDate());

// iv
console.log(now.getDay() +1);

// v
console.log(now.getHours());

// vi
console.log(now.getMinutes());

// vii
console.log(now.getTime());

/**
 * LEVEL 2
 */

// Number 1
const base = parseFloat(prompt("Enter base unit (b) of triangle: "));
const height = parseFloat(prompt("Enter height of triangle: "));
const areaTriangle= 0.5 * base * height;
console.log(` The area of the triangle is ${areaTriangle}`);


// Number 2
const sideA = parseFloat(prompt("Enter sideA of triangle: "));
const sideB = parseFloat(prompt("Enter sideB of triangle: "));
const sideC = parseFloat(prompt("Enter sideC of triangle: "));

const perimeterTriangle = sideA + sideB + sideC;
console.log(` The perimeter of the triangle is ${perimeterTriangle}`);


// Number 3
const length = parseFloat(prompt("Length of the rectangle: "));
const width = parseFloat(prompt("Width of the rectangle: "));
const areaRectangle = length * width;
const perimeterRectangle = 2 * (length + width);
console.log(` The area of the rectangle is ${areaRectangle}`);


// Number 4
const radius = parseFloat(prompt("Radius of circle: "));
const pi = 3.14
const areaCircle = pi * radius * radius;
console.log(` The radius of the circle is ${areaCircle}`);

// Number 5
const y1 = 0, y0 = -2, x1 =1.5, x0 = 1;
const slope = (y1 - y0)/(x1 - x0);
console.log(` The slope of the line is ${slope}`);
console.log(`The x-intercept is ${x0}`);
console.log(`The y-intercept is ${y0}`);


// Number 6
const Y1 = 10, Y0 = 2, X1 = 6, X0 = 2;
const nslope = (Y1 - Y0)/(X1 - X0);
console.log(` The slope of the points is ${nslope}`);

// Number 7
console.log( slope == nslope);

// Number 8
for (let i = 0;i>-4;i--){
    const y = i**2 + 6*i + 9;
    console.log.log(`The value of y is ${y}`);
    if (y==0){
        console.log( `The value of y is 0 when x is  ${i}`);
        break;
    }
}

// Number 9
const hours = parseFloat(prompt("Enter hours: "));
const rate = parseFloat(prompt("Enter rate per hour: "));

const pay = hours * rate;
console.log(`Your Weekly earning is ${pay}`);

// Number 10
const myName = "Peter";
console.log(myName >7?"Your name is long": "your name is short");

// Number 11
const firstname = "Asabeneh";
const lastname  = "Yetayeh";
console.log( firstname.length>lastname.length?`Your first name , ${firstname} is longer than your family name, ${lastname}`:`Your last name,${lastName} is longer than your first name,${firstname}.`);

// Number 12
let myAge = 250
let yourAge = 25

console.log(`I am ${Math.abs(myAge - yourAge)}  years older than you.}`);

// Number 13
const yearOfBirth = parseInt(prompt('Enter year of birth: '));
const currentYear = new Date.getFullYear();
switch (true) {
    case (currentYear - yearOfBirth ) < 18:
        console.log('You are not  allowed to drive.');
        break;
    case (currentYear - yearOfBirth) >= 18:
        console.log('You are allowed to drive.');
        break;
    default:
        console.log('Please enter a valid year.');
        break;
}

// Number 14
const numberOfYears = parseInt(prompt("Enter a number of years you lived: "));
const oneYear = 60 * 60 * 24 * 365;
console.log(`You lived ${numberOfYears * oneYear} seconds.`);

// Number 15
const time = new Date();

//i 
console.log(`${time.getFullYear()}-${time.getMonth()+1}-${time.getDay()+1 < 10 ? '' + time.getDay()+1 :time.getDay()+1 } ${ time.getHours()+1 < 10 ? '' + time.getHours()+1:time.getHours()}:${time.getMinutes()+1 < 10 ? '' + time.getMinutes()+1:time.getMinutes()}`);


// ii

console.log(`${time.getDay()+1 < 10 ? '' + time.getDay()+1 :time.getDay()+1 }- ${time.getMonth()+1}-${time.getFullYear()} ${ time.getHours()+1 < 10 ? '' + time.getHours()+1:time.getHours()}:${time.getMinutes()+1 < 10 ? '' + time.getMinutes()+1:time.getMinutes()}`);

// iii
console.log(`${time.getDay()+1 < 10 ? '' + time.getDay()+1 :time.getDay()+1 }/${time.getMonth()+1}/${time.getFullYear()} ${ time.getHours()+1 < 10 ? '' + time.getHours()+1:time.getHours()}:${time.getMinutes()+1 < 10 ? '' + time.getMinutes()+1:time.getMinutes()}`);


/**
 * LEVEL 3
 */ 

//Number 1
console.log(`${time.getFullYear()}-${time.getMonth()+1}-${time.getDay()+1 < 10 ? '' + time.getDay()+1 :time.getDay()+1 } ${ time.getHours()+1 < 10 ? '' + time.getHours()+1:time.getHours()}:${time.getMinutes()+1 < 10 ? '' + time.getMinutes()+1:time.getMinutes()}`);