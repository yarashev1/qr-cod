// class Car{
//     constructor(brend,year){
//         this.brend=brend;
//         this.year=year
//     }

//     details(){
//         return `${this.brend} ${this.year} ishlab chqarilgan`;
//     }
// }

// const toyota = new Car("toyota", 2017);
// const chevrolet = new Car("onix", 2026);

// console.log(toyota);

// console.log(chevrolet.details());



// class SHakl{
//     constructor(){

//     }
//     area(){
//         return 0
//     }
// }



//      class Tortburchak extends SHakl {
//         constructor(a,b){
//             super()
//             this.a=a
//             this.b=b
//         }

//         area(){
//             return  this.a*this.b
//         }
//     }
//     const test = new Tortburchak(5,7)
//     console.log(test.area())


//     class Kvadrat extends SHakl{
//         constructor(a){
//             super()
//             this.a=a
//         }

//         area(){
//             return this.a**2
//         }
//     }

//     const  kopaytma = new Kvadrat(2)

//     console.log(kopaytma.area())




//     class persen{
//         constructor(age){
//             this.age= age
//         }

//         set age(age){
//             if(typeof age !== "number"){
//             throw  new Error("iltimos son kriting");
//         }
//         this.age=age;
//     }
//     get age(){
//         return this.age;
//     }
    
//     }

//     const  persen = new persen(25);
//     console.log(persen.age)
//     person.age = -5
//     console.log(persen.age)

const inputlink = document.querySelector(".input-link");
const generateBtn= document.querySelector("#genereteBtn");
const qreImage = document.querySelector("#qrImage");


generateBtn.addEventListener("click", ()=>{
    
    let link = inputlink.value.trim();

    qreImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+
    encodeURIComponent(link);
    inputlink.value = "";
})