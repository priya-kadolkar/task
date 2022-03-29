//task 1 spread operator
let showName=(fname,lname,...arg)=>
{
    let a=fname+" "+lname+"";
   for(let title of arg){
     a=a+" "+title+" ";
   }
   return a;
}
//console.log(showName('priya','kadolkar','hello','hi'))

//mergeArrays([1,2,3], [3,4,5]) => [1,2,3,4,5]

let spreadOpe=()=>{
    let arr1=[1,2,3]
let arr2=[3,4,5]
let b=arr1.pop()
let arr3=[...arr1,...arr2]
return arr3;
}
console.log(spreadOpe())