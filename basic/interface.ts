// Its a contract (set of rules)
//It is use to define a structure of object
//5 rules
//1. how many properties we want in a object
//2. what should be key of each property
//3. Data type of property value
//4. Property should be manditory or optional(use ?)
//5. roperty should readonly or not


// Genrally start with I recommended not manditory
//order of property doesnt matter
//why interface
// - consistency
// - Type Safety


//can be more than one interfaces
//they will merge

interface IProduct{
    productName:string,
    readonly price:number,
    rating?:number,
    inStock:boolean
}

let product1:IProduct = {
    productName:"Iphone17MaxPro",
    price:125000,
    inStock:true
}
let product2:IProduct = {
    productName:"Samsung Galaxy s25 Ultra",
    price:135000,
    inStock:true
}

interface IUser{
    name:string;
}

interface IUser{
    city:string;
}

let user1:IUser = {
    name: "Kirankumar J M",
    city: "Nagpur"
}