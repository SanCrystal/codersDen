/**
 * LEVEL 1
 */
//NUMBER 1
(function fullName(){
    console.log('Asebenah Choice')
})()

//NUMBER 2
function FullName(firstName,lastName){
    return `${lastName} - ${firstName}`
}
console.log(FullName('Asebenah','Choice'))

//NUMBER 3
function addNumbers(num1,num2){
    return num1 + num2
}
console.log(addNumbers(1,2))

//NUMBER 4
function areaOfRectangle(length,width){
    return length * width
}
console.log(areaOfRectangle(2,5))

//NUMBER 5
function perimeterOfRectangle(length,width){
    return 2*(length + width)

}
console.log(perimeterOfRectangle(5,5))

//NUMBER 6
function volumeOfRectPrism(length,width,height){
    return length * width * height
}
console.log(volumeOfRectPrism(4,5,6))

//NUMBER 7
function areaOfCircle(radius){
    return Math.PI * radius * radius

}
console.log(areaOfCircle(5))

//NUMBER 8
function circumOfCircle(radius){
    return 2 * Math.PI * radius 

}
console.log(circumOfCircle(5))

//NUMBER 9
function density(mass,volume){
    return mass/volume

}
console.log(density(10,2))

//NUMBER 10
function speed(distance,time){
    return distance/time
}
console.log(speed(5,10))

//NUMBER 11
function weight(mass,gravity){
    return mass * gravity
}
console.log(weight(10,2))

//NUMBER 12
function tempInFarenheight(tempInCelsius){
    return (tempInCelsius * (9/5)) + 32
}
console.log(tempInFarenheight(100))

//NUMBER 13
function BMI(weight,height){
    const bmi = weight/(height * height)

    switch(true){
        case (bmi < 18.5):
            return 'Underweight'
        case ((bmi > 18.5) && (bmi < 24.9)):
            return 'Normal weight'
        case ((bmi > 25) && (bmi < 29.9)):
            return 'Overweight'
        case bmi > 30:
            return 'Obese'
        default:
            return 'Invalid weight'
    }

}
console.log(BMI(100,1.92))

//NUMBER 14
function checkSeason(month){
    switch(month.toLowerCase()){
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';    
    }
}
console.log(checkSeason('march'))

//NUMBER 15
function findMax(num1, num2,num3) {
    return Array.from(arguments).sort((a,b)=>a-b).pop()
}
console.log(findMax(4,9,5))

/**
 * LEVEL 2
 */

//NUMBER 1
function solveLinEquation(a,b,c){
    let x = c/a
    let y = (a*(c/a) + c)/b

    console.log(x,y)
    return a*x + b*y + c 
}

console.log(solveLinEquation(2,1,22))

//NUMBER 2
function solveQuadratic(a,b,c){
    if(Array.from(arguments).length == 0) return `{${0}}`
    return `{${(-b +(Math.sqrt((b**2) - (4*a*c))))/2*a}  ${(-b - (Math.sqrt((b**2) - (4*a*c))))/2*a}}`
}

console.log(solveQuadratic(1,4,4))
console.log(solveQuadratic()) 
console.log(solveQuadratic(1, 4, 4)) 
console.log(solveQuadratic(1, -1, -2)) 
console.log(solveQuadratic(1, 7, 12)) 
console.log(solveQuadratic(1, 0, -4)) 
console.log(solveQuadratic(1, -1, 0)) 

//NUMBER 3
function printArray(arr){
    for(let item of arr){
        console.log(item);
    }
}
printArray([1,2,3,4,5,6,7])

//NUMBER 4
function showDateTime(){
    const date = new Date()
    return `${date.getDate() <10? '0'+date.getDate():date.getDate() }/${date.getMonth()< 10?'0'+date.getMonth():date.getMonth()}/${date.getFullYear()} ${date.getHours() <10? '0' + date.getHours():date.getHours()}:${date.getMinutes()<10? '0' + date.getMinutes():date.getMinutes()}`
}
console.log(showDateTime())

//NUMBER 5
function swapValues(x,y){
    const x1 = y
    const y1 = x
    return `x =>${x1}, y => ${y1}`
}
console.log(swapValues(1,2))

//NUMBER 6
function reverseArray(arr){
    return arr.map((el,ind,arr)=>arr[arr.length-ind-1])
}
console.log(reverseArray([1,2,3,4,5]))

//NUMBER 7
function capitalizeArray(arr){
    return arr.map(el=>el.toUpperCase())

}
console.log(capitalizeArray(['array', 'number', 'string']))

//NUMBER 8
let arrItem =[]
function addItem(item){
    arrItem.push(item)
    return arrItem
}
console.log(addItem('hello'))
console.log(addItem('shut'))
console.log(addItem('gut'))

//NUMBER 9
function removeItem(index){
    if (arrItem[index] !== -1){
        arrItem.splice(index, 1)
    }
    return arrItem
}
console.log(removeItem(3))

//NUMBER 10
function sumOfNumbers(num){
    return Array(num+1).fill(0).map((el,ind,arr)=>ind).reverse().reduce((acc,val)=>acc + val,0);
}
console.log(sumOfNumbers(100))

// NUMBER 11
function sumOfOdds(num){
    return Array(num+1).fill(0).map((el,ind,arr)=>ind).filter(el=>el%2!=0).reverse().reduce((acc,val)=>acc + val,0);
}

console.log(sumOfOdds(10))

// NUMBER 12
function sumOfEven(num){
    return Array(num+1).fill(0).map((el,ind,arr)=>ind).filter(el=>el%2==0).reverse().reduce((acc,val)=>acc + val,0);
}
console.log(sumOfEven(10))

// NUMBER 13
function evensAndOdds(num){
    const arr = Array(num+1).fill(0).map((el,ind,arr)=>ind);
    return `The number of odds are ${arr.filter(el=>el%2 != 0).length}. \n The number of evens are ${arr.filter(el=>el%2 ==0).length}`
}
console.log(evensAndOdds(100))

// NUMBER 14
function sum(args){
    return Array.from(arguments).reduce((acc, el)=>acc + el,0)
}
console.log(sum(1,2,3,4))

// NUMBER 15
function randomUserIp(){
    return `${Math.ceil(Math.random()*255)}:${Math.ceil(Math.random()*255)}:${Math.ceil(Math.random()*255)}:${Math.ceil(Math.random()*255)}`
}
console.log(randomUserIp())  

// NUMBER 16
function randomMacAddress(){
    const hex = 'abcdef0123456789'.toUpperCase()
    return `${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}-${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}-${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}-${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}-${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}-${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}`
}
console.log(randomMacAddress())

// NUMBER 17
function randomHexaNumberGenerator(){
    const hex = 'abcdef0123456789'
    return `#${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}`
}
console.log(randomHexaNumberGenerator())

// NUMBER 18
function userIdGenerator(){
    const char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ'
    return  `${char[Math.ceil(Math.random()*char.length-1)]}${char[Math.ceil(Math.random()*char.length-1)]}${char[Math.ceil(Math.random()*char.length-1)]}${char[Math.ceil(Math.random()*char.length-1)]}${char[Math.ceil(Math.random()*char.length-1)]}${char[Math.ceil(Math.random()*char.length-1)]}${char[Math.ceil(Math.random()*char.length-1)]}`
}
console.log(userIdGenerator())      

/**
 * LEVEL 3
 */

// NUMBER 1
// function userIdGeneratedByUser(num,countID){
//     const char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ'
//     const numOfChars = parseInt(prompt('Enter num of characters to be generated'))
//     const numOfID = parseInt(prompt('Enter num of ids to be generated'))
//     return Array(numOfID).fill(0).map(el=>Array(numOfChars).fill(0).map(el=> `${char[Math.ceil(Math.random()*char.length-1)]}`).join('')).join('\n')

// }
// console.log(userIdGeneratedByUser())

// NUMBER 2
function rgbColorGenerator(){
    return `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`
}
console.log(rgbColorGenerator())

// NUMBER 3
function arrayOfHexaColors(num){
    const hex = 'abcdef0123456789'
    return Array(num).fill(0).map(el=>
  `#${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}`)
}
console.log(arrayOfHexaColors(3))

// NUMBER 4
function arrayOfRgbColors(num){
    return Array(num).fill(0).map(el=> `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`)
}
console.log(arrayOfRgbColors(3))

// NUMBER 5
function convertHexaToRgb(hex){
    const he = 'ee'
    console.log(parseInt(he,16))
    const first=parseInt((hex.replace('#', '').substring(0,2)),16)
    const second=parseInt((hex.replace('#', '').substring(2,4)),16)
    const third=parseInt((hex.replace('#', '').substring(4,6)),16)
    return `rgb(${first},${second},${third})`;
}
console.log(convertHexaToRgb('#eeff44'))

// NUMBER 6
function convertRgbToHexa(rgb){
    return `#${rgb.match(/\d+/gi).map(el=>Number(el).toString(16).length < 2?'0'+Number(el).toString(16):Number(el).toString(16)).join('')}`
}
console.log(convertRgbToHexa('rgb(5, 7, 255)')) 
console.log(convertRgbToHexa('rgb(238, 255, 68)')) 

// NUMBER 7
function generateColors(kind, num){
    const hex = 'abcdef0123456789'
    return kind == 'rgb' ? Array(num).fill(0).map(el=> `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`):Array(num).fill(0).map(el=>
        `#${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}${hex[Math.ceil(Math.random()*hex.length-1)]}`)
}

console.log(generateColors('rgb', 3))
console.log(generateColors('', 3))

//NUMBER 8

function shuffleArray(arr){
    let track = []
    let newArr =[]
    while (track.length < arr.length){
        const index = Math.abs(Math.ceil(Math.random()*arr.length-1))
        if(!track.includes(index)){
            track.push(index)
            newArr.push(arr[index])
        }
    }
    return newArr   
}
console.log(shuffleArray([1,3,4,5,6,4,8])) 

// NUMBER 9
function factorial(num){
    if(num === 0 || num === 1) return 1
    return factorial(num -1) * num
}
console.log(factorial(6))

// NUMBER 10
function isEmpty(arr){
    return arr.length>0? 'Not Empty' : 'Empty';

}
console.log(isEmpty([1,3]))

// NUMBER 11
function sum(num){
    return Array.from(arguments).reduce((a,b)=>a+b,0)
}
console.log(sum(1,2,3,4,5))

// NUMBER 12
function sumOfArrayItems(arr){
    if(arr.some(e=>typeof e == 'string')) return 'Cannot perform operation "sum" on a string item'
    return arr.reduce((acc,val)=>acc+val,0)
}
console.log(sumOfArrayItems([1,2,4,7,'89']))
console.log(sumOfArrayItems([1,2,4,7]))

// NUMBER 13
function average(arr){
    if(arr.some(e=>typeof e == 'string')) return 'Cannot perform operation "average" on a string item'
    return arr.reduce((acc,val)=>acc+val,0)/arr.length
}
console.log(average([1,2,4,7,'89']))
console.log(average([1,2,4,7]))

// NUMBER 14
function modifyArray(arr){
    return arr.length >=5? arr.map((el,ind,arr)=>ind==4?el.toUpperCase():el): 'item not found'
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Avocado', 'Tomato', 'Lemon','Carrot']));

//NUMBER 15
function isPrime(num){
    const prime = [1,2,3,5,7]
    const odd = num % 2 !=0
    const newOdd= num % 3 !=0
    const newOdder = num % 5 !=0
    const lastOdder = num % 7 !=0
    if ((num > 7 && (odd && newOdd && newOdder && lastOdder))|| prime.includes(num) ) return 'is prime'
    return 'Not a prime number'
}
console.log(isPrime(97))

// NUMBER 16
function checksUnique(arr){
    return arr.length === Array.from(new Set(arr)).length? 'Array is Unique' : 'Array is not Unique'
}
console.log(checksUnique([1,2,3,4,5,4,6,6]))
console.log(checksUnique([1,2,3,4,]))

// NUMBER 17
function sameDataType(arr){
    return arr.every((e,ind,arr)=>typeof e === typeof arr[0])? 'Items are of the same data types. ' : 'Items are not of the same data types.'
}
console.log(sameDataType([1,2,3,4]))
console.log(sameDataType([1,2,3,4,'5']))

// NUMBER 18
function isValidVariable(variable){
    const supportedSymbols = /[!,@#%^&*\(\)-=+|\\\}\{\[\/:;,\]\.\?]/
    const numLetters = /[^A-Za-z0-9]/
    console.log(variable.match(supportedSymbols,'gi'),variable.match(numLetters,'gi'))
    return  variable.match(numLetters,'gi') && variable.match(supportedSymbols,'gi')? 'InValid variable': 'Valid variable'
}
console.log(isValidVariable('hello'))
console.log(isValidVariable('hello_'))
console.log(isValidVariable('hello='))

// NUMBER 19
function sevenRandomNumbers(){
    let track = []
    let newArr =[]
    while (track.length < 7){
        const index = Math.abs(Math.ceil(Math.random()*9))
        if(!track.includes(index)){
            track.push(index)
            newArr.push(index)
        }
    }
    return newArr 
}
console.log(sevenRandomNumbers())   

// NUMBER 20
function reverseCountries(countries){
    return countries.slice().reverse()
}
console.log(reverseCountries(['Afghanistan','Parkistan','Albania','Usandatu','Canada','Nigeria','Ghana','Indonesia']))
    
