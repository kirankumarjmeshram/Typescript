//defiine structure of object like Interface
//cannot have 2 types with one name 
//can use to define =>obj, array, tuple, literal.

type address = {
    city?:string,
    readonly state:string
}

let newAddress : address = {
    city:"Nagpur",
    state:"MH"
}

type mydata = [string, number ] //tuple
let user:mydata = ["", 123]
type myliterals = "online" | "offline"
let mode: myliterals = "offline";
