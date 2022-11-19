console.log('hello there ')
// let count = 0;
// const persistence = (num )=>{
//     let count   = 0;
//     // let number = `${num}`
//     // if(number.length ===1){
//     //     return count
//     // }
//     // const val =  [...number].reduce((acc,cur)=>acc*(+cur),1)

//     // count++
//     // return persistence(val)
//     let number = `${num}`
//     console.log(typeof number)
//     while(number.length >1){
//        let val =  [...number].reduce((acc,cur)=>acc*(+cur),1)
//         number = `${val}`
//        count++
       

//     }
//     return count
// }
// const persistence = num => {
//     return `${num}`.length > 1 
//       ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//       : 0;
//   }
// // console.log(persistence(27))
// console.log(persistence(27))


// const population = (year)=>{
//     let pop = 1000
//     for(let count =0;count < year;count++){
//         let inhabitants = Math.floor(pop + pop * 0.02 + 50)
//         pop = inhabitants
//     }
 
//     return pop
// }

// console.log(population(2))

// const nb_year = (p0,rate,inc,total)=>{
//     let year = 0
//     let result = 0
//     while(result <=total){
//         console.log(p0)
//             result =Math.floor((p0 +  p0 * rate/100 )+ inc);
//             console.log(result)
//             year ++
//             p0 = result
//         }
//     return year;
// }
// console.log(nb_year(1500000, 2.5, 10000, 2000000))
// console.log(nb_year(1500, 5, 100, 5000))

const findEvenIndex = (arr)=>{
    for(let i = 0; i < arr.length -1; i++){
        let left = arr.slice(0,i).reduce((acc,cur)=>acc + cur,0);
        let right = arr.slice(i+1).reduce((acc,cur)=>acc + cur,0);
        console.log(left,right)
        if(left === right) return i
    }
    return -1
}
console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,2,3,4,5,6]))