//task 1
let user={
    name:"Priya",
    surname:"Kadolkar",
}
user.name="naina";
delete user.surname;
console.log(user);
//-----------------------------------------------------------------------------------
//task 2
let salaries={
    John: 1500,
    Pete : 2000,
    Vignesh:4500,
    Amy:5000
}
let sum=0;
for(let sal in salaries){
    sum+=salaries[sal];
}
console.log("sum of salary is:"+sum);
// -----------------------------------------------------------------------------------

// task 3
// Multiply the values by 2. Whether value is number. 
// If yes, then multiply by 2 if not keep it as is.
// Hint: Check the type by typeof

// width=typeof pageInfo.width;//number
// if(width){
//     pageInfo.width=500*2;
//     console.log("width:"+pageInfo.width);
// }
// height=typeof pageInfo.height;//number
// if(height){
//     pageInfo.height=800*2;
//     console.log("height:"+pageInfo.height);
// }

let pageInfo = {
    width: 500,
    height: 800,
    title: 'My page'
}

for(let info in pageInfo){
    // console.log(pageInfo[info]);
    if(typeof pageInfo[info]=="number"){
        // pageInfo[info]*=2;
        pageInfo[info]=pageInfo[info]*2;
    }
}
console.log(pageInfo);

//-----------------------------------------------------------------------------------
// task4

// Create calculator object.
// read()
// add()
// multiply()

let calculator={
    num1:0,
    num2:0,
    read:function(){
        this.num1=+(prompt("Enter first number"));
        this.num2=parseInt(prompt("Enter second number"));
        console.log(this.num1,this.num2);
    },
    add:function(){
        let addition=this.num1+this.num2;
        console.log("addition="+addition);
    },
    multiply:function(){
        let multiplication=this.num1*this.num2;
        console.log("Multiplication="+multiplication);
    }
}
// calculator.read();
// calculator.add();
//-----------------------------------------------------------------------------------

//task 5
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
       alert( this.step );
       return this;
    }
  };

//   Shantanu B2:36 PM
//    ladder.up().up().down().showStep().up().showStep()

// ladder.up()
// ladder.up()
// ladder.down()
// ladder.showStep();
// ladder.up()
// ladder.showStep();

// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
    num1=0;
    num2=0;
    this.read = function()
     {
      this.num1 = parseInt(prompt("Enter first number"));
      this.num2 = parseInt(prompt("Enter second number"));
    };
    this.sum = function() {  
        let addition= this.num1+this.num2
      console.log("addition="+addition);

    };
    this.mul = function() {
        let multiply=this.num1*this.num2;
        console.log("multiplication="+multiply); 
    };
  }
  let calculator1 = new Calculator();
    calculator1.read();
    calculator1.sum();
    calculator1.mul();