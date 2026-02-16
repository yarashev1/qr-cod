//    ============================1==================== 
class Calculator{
    constructor(value=0){
        this.value=value
    }
    add(number){
        this.value+=number
        return this
    };

    subtract(number){
        this.value-=number
        return this
    };
    multiply(number){
        this.value*=number
        return this
    }
    divide(number){
        this.value/=number
        return this
    }
    getResult(){
        return this.value
    }
}

const result = new Calculator(10)
.add(5)
.subtract(3)
.multiply(4)
.divide(2)
.getResult()

console.log(result);





// ==========================2======================

class ElementManipulator {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  setText(text) {
    this.element.textContent = text;
    return this; 
  }

  setColor(color) {
    this.element.style.color = color;
    return this;
  }

  setBackgroundColor(color) {
    this.element.style.backgroundColor = color;
    return this;
  }

  addClass(className) {
    this.element.classList.add(className);
    return this;
  }
}


const manipulator = new ElementManipulator("#myElement");

manipulator
  .setText("Hello, World!")
  .setColor("white")
  .setBackgroundColor("blue")
  .addClass("highlight");





        