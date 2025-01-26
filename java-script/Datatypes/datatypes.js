//number Datatypes

console.log(typeof 10);
console.log(typeof -10);
console.log(typeof 0.5);


//String Datatype

let a='hello'
console.log(a);
console.log(typeof a);

let b="hello"
console.log(b);
console.log(typeof b);

let m=10;
let n=10;
let o=m+n;
console.log(`The sum of ${m} and ${n} is ${o}`);

console.log(`I am
    a 
    developer
    `);

//Undefined Datatype
let p;
console.log(p);
console.log(typeof p);

//null 
let q=null
console.log(q);
console.log(typeof q);

//boolean

console.log(typeof true);
console.log(typeof false);

console.log(10? true : false);
console.log(-10? true : false);
console.log(1? true : false);//true


console.log(0? true : false);
console.log(undefined? true : false);
console.log(null? true : false);
console.log(NaN? true : false);//false

//bigint

console.log(typeof 1n);
console.log(typeof 10n);
console.log(typeof 100n);

//symbol

let f = Symbol("Preethi")
console.log(f);

let g = Symbol('Preethi')
console.log(g);

console.log(f==g);
console.log(f===g);
console.log(f===f);