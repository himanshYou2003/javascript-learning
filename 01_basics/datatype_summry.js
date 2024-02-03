//  # Primative [call by value]

// 7 Type : String,Number,Boolean,Null,Undefine,Symbol,BigInt

// # Non Primative [call by refrence]

// Array,Object ,Function

const heros = ["saktiman","krish","flyingjeet","jevan"] //array

let obj ={
    name : "hima",
    age :20         //object
}
const myFunction = function(){
    console.log("zany");
}





//javascript dynamically type launguage coz you cant give the int,boolean like this

let first = symbol("123")
let second = symbol("123")
console.log(first===second); //answer will error coz symbol are unique so there dtatatype not same