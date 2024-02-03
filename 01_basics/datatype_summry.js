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

// let first = symbol("123")
// let second = symbol("123")
// console.log(first===second); //answer will error coz symbol are unique so there dtatatype not same




//-----------------------------------M-E-M-O-R-Y------------------------------------------------

//      Stack(primative)                                        Heap(non-primative)

//      value(change in as copy )                          refrence[change in original value]



//----------------------------------------------S-T-A-C-K-------------------------------------
let myName = "himanshu"

let nickName = myName

//---change 

nickName = "zany"

// console.log(nickName);
// console.log(myName);



//-----------------------------------------------H-E-A-P---------------------------------------

let user1 = {
    email : "himanshu@gmail.com",
    upi : "himanshu@ylb"
}
let user2 = user1


user2.email="zany@gmail.com"

console.log(user2.email);
console.log(user1.email);
