const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  


//NUMBER 1
console.log(countries);
console.log(webTechs);

//NUMBER 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(/,|\./g,'').split(' ');
console.log(words);
console.log(words.length);

//NUMBER 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.includes('Meat') ? shoppingCart:shoppingCart.unshift('Meat');

shoppingCart.includes('Sugar') ? shoppingCart:shoppingCart.push('Sugar');

shoppingCart.includes('Honey') ?shoppingCart.splice(shoppingCart.indexOf('Honey'),shoppingCart.indexOf('Honey') +1): shoppingCart;

shoppingCart.includes('Tea') ?shoppingCart.splice(shoppingCart.indexOf('Tea'),shoppingCart.indexOf('Tea') +1,'Green Tea'): shoppingCart;

console.log(shoppingCart);
console.log(shoppingCart.length);

//NUMBER 4
countries.includes('Ethiopia') ? console.log("ETHIOPIA"):countries.push('ETHIOPIA');

console.log(countries);

//NUMBER 5
webTechs.includes('Sass') ?countries.push('Sass'): console.log("Sass is a CSS preprocess");
console.log(webTechs);

//NUMBER 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

/**
 * LEVEL 3
 */

// NUMBER 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedArrayMin = ages.sort()[0];
const sortedArrayMax = ages.sort()[ages.sort().length -1];
console.log(sortedArrayMin,sortedArrayMax);

//find median age
const sortedArrayMedian = ages.sort()[Math.floor(ages.length / 2)];
console.log(sortedArrayMedian);

// find average age
let sumAges = 0;
for (let age of ages){
    sumAges += age;
}
const sortedArrayAverage =Math.ceil(sumAges/ages.length)
console.log(sortedArrayAverage);


//find the range
const sortedArrayRange = sortedArrayMax - sortedArrayMin;
console.log(sortedArrayRange);

// compare value
const minAverage = Math.abs(sortedArrayMin - sortedArrayAverage);
console.log(minAverage);

const maxAverage = Math.abs(sortedArrayMax - sortedArrayAverage);
console.log(maxAverage);


//countries 10 
// NUMBER 1
const country10 = countries.slice(0,10);
console.log(country10);

// NUMBER 2
const mid = []
const country10Mid = country10.length % 2 == 0 ?(mid.push(country10[Math.floor(country10.length /2)-1]),mid.push(country10[Math.floor(country10.length /2)])):country10[Math.floor(country10.length /2)]
console.log(mid);
console.log(country10Mid);


//NUMBER 3
let firstPart = [];
let secondPart = [];
const countryEqual = countries.length % 2 == 0 ?(firstPart=countries.slice(0,Math.floor(countries.length /2)-1),(secondPart=countries.slice(0,Math.floor(countries.length /2)-1))):(firstPart= countries.slice(0,Math.floor(countries.length /2)+1),(secondPart=countries.slice(Math.floor(countries.length /2)+1,)))

console.log(firstPart);
console.log(secondPart);