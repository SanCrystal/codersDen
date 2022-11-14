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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


/**
 * LEVEL 1
 */
// NUMBER 1
//for loop
for(let i =0;i<10;i++){
    console.log(i)
};
//while
let i = 0;
while(i<10){
    console.log(i)
    i++
};
//do while
let k =0;
do{
    console.log(k);
    k++
}while(k<10)

//NUMBER 2
//for loop
for(let i=10;i>0;i--){
    console.log(i)
}

//while loop
let o = 10
while(o>0){
    console.log(o);
    o--
}
//do loop
let x =10
do{
    console.log(x)
    x--
}while(x>0)

//NUMBER 3
// for (let i=0;i<n;i++){
//     console.log(i)
// }

//NUMBER 4
let hash = 8;
for(let i = 1; i <=hash;i++){
    console.log('#'.repeat(i))
}

//NUMBER 5
for(let i = 0;i<=10;i++){
    console.log(`${i} x ${i} = ${i*i}`)
}
//NUMBER 6
for(let i = 0;i<=10;i++){
    if(i==0)console.log('i\t\ti^2\t\ti^3\t')
    console.log(`${i} \t\t ${i*i} \t\t ${i*i*i}`)
}

//NUMBER 7
for(let i = 0;i<=100;i++){
    if(i%2===0)console.log(i)
}

//NUMBER 8
for(let i = 0;i<=100;i++){
    if(i%2!==0)console.log(i)
}
//NUMBER 9 
for(let i = 0;i<=100;i++){
    if(i<=7 && i!==4 && i!==6 && i!==0  ) console.log(i)
    if(i>7 && i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0)console.log(i)
    
}
//NUMBER 10
let sum = 0;
for(let i = 0;i<100;i++){
    sum +=i
}console.log('The sum of all numbers form 0 to 100 is ' + sum +'.')

//  NUMBER 11
let even =0;
let odd = 0;
for(let i = 0;i<=100;i++){
    if(i%2===0) even+=i
    if(i%2!==0) odd+=i
}
console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`)

//NUMBER 12
let evens =0;
let odds = 0;
for(let i = 0;i<=100;i++){
    if(i%2===0) evens+=i
    if(i%2!==0) odds+=i
}
console.log([evens,odds])

//NUMBER 13
let arr5rand =[]
for(let i=0;i<5;i++){
    arr5rand.push(Math.ceil(Math.random()*100))
}
console.log(arr5rand)

//NUMBER 14
let arr5randUniq =[]
while(true){
    let num =Math.ceil(Math.random()*100)
    if (!arr5randUniq.includes(num)) arr5randUniq.push(num)
    if (arr5randUniq.length == 5) break
}
console.log(arr5randUniq)

//NUMBER 15
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
let id = ''
for (let i=0;i<6;i++){
    id += characters[Math.ceil(Math.random()*61)]
}
console.log(id)

/**
 * LEVEL 2
 */
//NUMBER 1
let number = 18
let id2=''
for (let i=0;i<number;i++){
    id2 += characters[Math.ceil(Math.random()*61)]
}
console.log(id2)    

//NUMBER 2
let hexa = '0123456789abcdef'
let newhex='#'
for (let i=0;i<6;i++){
    newhex += hexa[Math.ceil(Math.random()*15)]
}
console.log(newhex)

//NUMBER 3
let values =[]

for (let i=0;i<3;i++){
   values.push(Math.ceil(Math.random()*256))
}
console.log(`rgb(${values[0]},${values[1]},${values[2]})`)

//NUMBER 4
const newArr = countries.map(curr=>curr.toUpperCase()).sort()
console.log(newArr)

//NUMBER 5
const countriesLength = countries.map(curr=>curr.length);
console.log(countriesLength)

//NUMBER 6
const mapArr = countries.map(curr=>[curr,curr.substring(0,3).toUpperCase(),curr.length]);
console.log(mapArr)

//NUMBER 7
const lanArr = countries.filter(curr=>curr.includes('land'));
console.log(lanArr)

//NUMBER 8
const iaArr = countries.filter(curr=>curr.endsWith('ia'));
console.log(iaArr)

//NUMBER 9 
const biggestChar = countries.map(curr => curr ).sort((a,b)=>a.length-b.length)[countries.map(curr => curr.length ).sort((a,b)=>a-b).length -1]
console.log(biggestChar)

//NUMBER 10
const fiveChar = countries.filter(curr => curr.length ==5  )
console.log(fiveChar)

//NUMBER 11
const longWord = webTechs.sort((a,b)=>a.length-b.length)[webTechs.map(curr => curr.length ).sort((a,b)=>a-b).length -1]
console.log(longWord)

//NUMBER 12
const techWord = webTechs.map(curr => [curr,curr.length] )
console.log(techWord)

//NUMBER 13
const mern = mernStack.map(curr=>curr[0].toUpperCase()).join('');
console.log(mern)

//NUMBER 14
for (let tecs of webTechs){
    console.log(tecs)
}

//NUMBER 15
const fruit = ['banana', 'orange', 'mango', 'lemon'].map((el,ind,arr)=>arr[arr.length -ind-1])
console.log(fruit)

//NUMBER 16

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(let stack of fullStack){
    for (let substack of stack){
        console.log(substack)
    }
}

/**
 * LEVEL 3
 */
//NUMBER 1
const newcountry = countries.slice()
console.log(newcountry)

//NUMBER 2
const sortedCountries = countries.slice().sort()
console.log(sortedCountries)

//NUMBER 3
const webtcSorted = webTechs.sort()
console.log(webtcSorted)

const mernSorted = mernStack.sort();
console.log(mernSorted)

//NUMBER 4
const contLand = countries.filter(curr=>curr.includes('land'))
console.log(contLand)

//NUMBER 5
const highChar = countries.sort((a,b)=>a.length-b.length).pop()
console.log(highChar)

//NUMBER 6
const conLan = countries.filter(curr => curr.includes('land'))
console.log(conLan)

//NUMBER 7
const fourchars = countries.filter(curr => curr.includes('land'))
console.log(fourchars) 

///NUMBER 8
const greaterThan2 = countries.filter(curr => curr.length > 2)
console.log(greaterThan2)

///NUMBER 9
const reversed = countries.reverse().map(curr =>curr.toUpperCase())
console.log(reversed)