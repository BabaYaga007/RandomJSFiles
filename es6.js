var name = "Global scope"


function great(){
var name = "Local scope"   

console.log(name);
}

great();

//block scope it has {} these signs and evary thing in it is block scope
var num = 10
if (num === 10){
    var num =20;
    console.log(num)
}

console.log(num)

function greet(name="default", age=12){
console.log(name,age)
}    
 greet("sujay",12333);


 //templet iterates
let one ="js"
 console.log(`sujay`
 ,`${one}`)

 //destructuring
 //-array
 //-objects

 const ourArray = ["java",123]
 
 const [age,na]=ourArray

 console.log(na,age)
 
const obj ={
    nam:"suja",
    ag:12
}
const{ag,nam}=obj
console.log(nam,ag)

//arrow function

const greaat=()=>{
    console.log("sujya")

}
greaat();


// this key word is very imp
const objee ={
    name:"sujay",
    hello:function(){
        console.log(this);
    },
    another:{
        name:"java",
        greeeet:function(){
            console.log("another",this)
        }
    }
};
console.log("outter",this);
//when we 
objee.hello();

objee.another.greeeet();

