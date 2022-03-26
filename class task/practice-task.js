//task 1
function camelize(str){
    let a=str.split("-");
    let Str1="";
  a.forEach((element,index) => {
      if(index!=0){
         Str1+=element.charAt(0).toUpperCase()+element.slice(1)
      }
      else{
         Str1 += element
      }
console.log(Str1)
  })
}
(camelize("background-color"))

//task 2
let arrObj = [
    { name: "Shantanu", age: 27 },
    { name: "Vignesh", age: 24 },
    { name: "Priya", age: 24 },
    { name: "Goutham", age: 26 },
  ];
  let a=arrObj.map((list) =>{
return list.name;
  })
//   console.log(a)

// task 3

function Calculator() {
    num1=0;
    num2=0;
    this.read = function()
     {
      this.addMethod("+",(a,b)=>a+b)
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
    // calculator1.read();
    // calculator1.sum();
    // calculator1.mul();

    // task4
    function printNumbers(from,to){
        setTimeout(()=>{
            for(let i=from;i<=to;i++){
                console.log(i)
            }
        },5000);
        
    }
    printNumbers(1,5);
