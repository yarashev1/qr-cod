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


// let animal= {
//     eats: true,
//     walk(){
//         console.log("animal is walking");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__:animal
// };

// let longEar ={
//     earlength:10,
//     __proto__:rabbit
// };

// console.log(longEar.eats);
// console.log(longEar.earlength)
// console.log(longEar.jumps);




// const inputlink = document.querySelector(".input-link");
// const generateBtn= document.querySelector("#genereteBtn");
// const qreImage = document.querySelector("#qrImage");


// generateBtn.addEventListener("click", ()=>{
    
//     let link = inputlink.value.trim();

//     qreImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+
//     encodeURIComponent(link);
//     inputlink.value = "";
// })




// ===========================vazifa==========================
            // ========================= 1 =========================

class Shape{
    constructor(color){
        this.color=color
    }

    getColor(){
         return   `${this.color} rang`
    }
}

class Rectangle extends Shape{
    constructor(color,width,height){
        super(color)
        this.width=width;
        this.height=height
    }
    getArea(){
      return  `to'rtburvhakning perimetiri topilsin ${this.width*this.height}`
}
}


const perimetir =  new Rectangle("qora",12,34);
console.log(perimetir.getArea());
//                      =====================2=======================

class Employee{
    constructor(name, salary){
        this.name=name,
        this.salary=salary
    }
    getSalary(){
        return  ` ism :${this.name}  oylik:${this.salary}`
    }
}

class Manager extends Employee{
    constructor(name,salary,bonus){
        super(name,salary)
        this.bonus=bonus
    }
    getBonus(){
        return `qo'shiladigan bonus ${this.bonus}`
    }

}

const oylik = new Manager("Odilbek",2300,25)
const narxi = new Manager("sarvar",4567,28)

console.log(oylik.getSalary())
console.log(oylik.getBonus());


// ====================================3================================

let cars= {
    nmadir:true,
    walk(){
        console.log("moshinalarni chiqar");
    }
};

let damas={
    narxi:true,
    __proto__: cars
};

let lasetti ={
    luyc:100,
    __proto__: damas
};
     console.log(lasetti.narxi);
     console.log(lasetti.luyc);
     

     