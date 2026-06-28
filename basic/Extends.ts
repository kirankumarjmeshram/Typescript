//Multiple interface extends supported

interface PersonalData {
    name: string,
    id:number
}
interface Contact {
    phone:number,
    email:string
}

interface UserDetails extends PersonalData, Contact{
    city:string,
    state:string
}

var admin : UserDetails = {
    name:"Kirankumar J M",
    id:123,
    phone:8888,
    email:"abc@gmail.com",
    city:"Nagpur",
    state:"MH"
}