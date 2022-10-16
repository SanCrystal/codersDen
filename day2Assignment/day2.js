// 1.
let challenge = "30 Days Of JavaScript.";

// 2.
console.log(challenge);

// 3.
console.log(challenge.length);

// 4.
console.log(challenge.toUpperCase());

// 5. 
console.log(challenge.toLowerCase());

// 6.
console.log(challenge.substr(3,4));
console.log(challenge.substring(3,7));

// 7.
console.log(challenge.slice(2,));

// 8. 
console.log(challenge.includes("Script"));

// 9. 
console.log(challenge.split());

// 10.
console.log(challenge.split(' '));

// 11.
let techcom  = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techcom.split(','));

// 12. 
console.log("30 Days Of JavaScript".replace("JavaScript","Python"));

// 13.
console.log("30 Days Of JavaScript".charAt(15));

// 14.
console.log("30 Days Of JavaScript".charCodeAt('J'));

// 15.
console.log("30 Days Of JavaScript".indexOf("a"));

// 16.
console.log("30 Days Of JavaScript".lastIndexOf("a"));

// 17.
console.log("You cannot end a sentence with because because because is a conjuction".indexOf("because"));

// 18.
console.log("You cannot end a sentence with because because because is a conjuction".lastIndexOf("because"));

// 19.
console.log("You cannot end a sentence with because because because is a conjuction".search("because"));

// 20.
console.log(" 30 Days Of JavaScript".trim());

// 21.
console.log("30 Days Of JavaScript".startsWith("30"));

// 22.
console.log("30 Days Of JavaScript".endsWith("JavaScript"));

// 23.
console.log("30 Days Of JavaScript".match(/a/g));

// 24. 
console.log("".concat("30 Days Of"," JavaScript"));

// 25.
console.log("30 Days Of JavaScript".repeat(2));


/**
 * LEVEL 2.
 */

// 1 .
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

// 2.
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3. 
console.log(typeof "10" ==  typeof 10);
console.log(typeof parseInt('10') == typeof 10);

// 4. 
console.log(parseFloat('9.8') == 10);
console.log(Math.ceil(parseFloat('9.8')) == 10);

// 5. 
console.log("python".includes("on") == "jargon".includes("on"));

// 6.
console.log("I hope this course is not full of jargon".includes("jargon"));

// 7. 
console.log(Math.random()*101);

// 8.
console.log((Math.random()*51)+ 50);

// 9.
console.log(Math.random() * 256);

// 10.
let letter = "JavaScript";
console.log(letter[Math.floor(Math.random()*letter.length)]);

// 11.
console.log(" 1\t1\t1\t1\t1\n 2\t1\t2\t4\t8\n 3\t1\t3\t9\t27\n 4\t1\t4\t16\t64\n 5\t1\t5\t25\t125");

// 12.
console.log("You cannot end a sentence with because because because is a conjuction".substr(30,25));

/**
 * LEVEL 3
 */

// 1.
console.log("Love is the best thing in this world. Some found their love and some are still looking for their love.".match(/love/gi).length);

// 2.
console.log("You cannot end a sentence with because because because is a conjuction".match(/because/gi).length);

// 3.
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';


let cleanedText =sentence.replace(/%/g,'').replace(/@/g,'' ).replace(/#/g,'').replace(/&/g,'').replace(/\$/g,'')
console.log(cleanedText);
let words = cleanedText.match(/\w+/g);
console.log(words);
let store = {}
let higherOccurence = 0;
let item ;
words.map(e=>{
    const pattern = new RegExp(` ${e} `,"g")
    const count = words.join(' ').match(pattern).length
    console.log(count)
    store[e]= count;
    count > higherOccurence?( higherOccurence=count,item=e):higherOccurence=higherOccurence;
    
});

console.log(higherOccurence,item)

// 4.
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = text.match(/\d+/g)
let annualIncome = (parseInt(income[0])*12) + parseInt(income[1]) + (parseInt(income[2])*12);
console.log(annualIncome);