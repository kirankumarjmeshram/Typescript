// Any datatypes
let price :any = "90000";
price = 90000;
price = true;

console.log(price)

// Union datatype : assign any number of datatypes
let pincode : string | number | null = "363-765";
pincode = null;
pincode = 363765;
console.log(pincode)

// literal datatypes
let password : "kiran123" = "kiran123"
// password = "kiran1234" // invalid

// array datatypes
let data : number[] = [10,30,40,50];
let info : string[] = ["hi", "hello"];
let mydata : any[] = [100,"hi", true];

// ? -> makes property optional
//readOnly properly => cannot change
//tuple datatypes
let myinfo : readonly [string, number,string,boolean?] = 
    ["hi", 123, "hello", true]

//object

let myObj:{id:number,name:string, isMarried?:boolean,company?:null} ={
    id:101,
    name:"KKRJM",
    isMarried:false,
}
console.log("myLog", myObj)


let myObj2:{readonly id:number} = {id:110}

