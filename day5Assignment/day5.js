/**
 * LEVEL 1
 */ 
// NUMBER 1 
const arr = [];
const arr1 = new Array();
console.log(arr,arr1);

//NUMBER 2
const arr2 = [1,2,3,5,6,4,4,9];
console.log(arr2);

//NUMBER 3
const lengthArr2 = arr2.length;
console.log(lengthArr2);
//NUMBER 4
const firstItem = arr2[0];
const middleItem = arr2[Math.floor(arr2.length/2)];
const lastItem = arr2[arr2.length-1];
console.log(firstItem,middleItem,lastItem);

//NUMBER 5
const mixTypes = ['hello', 'world',1,2,3,4,true,false,null,undefined];
const mixTypesLength = mixTypes.length;
console.log(mixTypes,mixTypesLength);

//NUMBER 6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];

//NUMBER 7 
console.log(itCompanies);

//NUMBER 8
const itCompaniesLength = itCompanies.length;
console.log(itCompaniesLength);

//NUMBER 9
const firstCompany = itCompanies[0];
const midCompany = itCompanies[Math.floor(arr2.length/2)];
const lastCompany = itCompanies[itCompanies.length-1];
console.log(firstCompany,midCompany,lastCompany);

//NUMBER 10

for(let company of itCompanies) {
    console.log(company);
};

//NUMBER 11

for(let company of itCompanies) {
    console.log(company.toUpperCase());
};

//NUMBER 12

const companyString = itCompanies.toString()
console.log(companyString)

//NUMBER 13
const newCompany = ["Amazon","Google","Onehealth","IBM","Jumia"];
for(let company of newCompany){
    if(itCompanies.indexOf(company)=== -1){
        console.log(`${company} does not exist in the IT companies`);
    }else{
        console.log(`${company} exists in the IT companies`);
    }
};

//NUMBER 14
const newVal = [];
for(let company of itCompanies){
    Array.from(company.matchAll(/o/gi)).length >=2 ?newVal.push(company):newVal;
};
console.log(newVal)

//NUMBER 15
const sortedItCompanies = itCompanies.sort()
console.log(sortedItCompanies);

//NUMBER 16
const reversedItCompanies = itCompanies.reverse()
console.log(reversedItCompanies);

//NUMBER 17
itCompanies.reverse()
const slicedCompanyF = itCompanies.slice(0,3);
console.log(slicedCompanyF);

//NUMBER 18
const slicedCompanyL = itCompanies.slice(itCompanies.length - 3,);
console.log(slicedCompanyL);

//NUMBER 19
const slicedCompanyM = itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2) + 1);
console.log(slicedCompanyM);

//NUMBER 20
const removedFirst = itCompanies.shift()
console.log(removedFirst);

//NUMBER 21
const removedMiddle = itCompanies.splice(Math.floor(itCompanies.length/2),1)
console.log(removedMiddle);


//NUMBER 22
const removedLast = itCompanies.pop()
console.log(removedLast);

//NUMBER 23
const removedAll = itCompanies.splice(0);
console.log(itCompanies);


/**
 * LEVEL 2
 */ 

//NUMBER 1
