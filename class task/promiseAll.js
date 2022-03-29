//Promise.all()

/*const promise1 = Promise.resolve(3)
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); 
});*/
// expected output: Array [3, 42, "foo"]
//----------------------------------------------------------------------------------------------------------
//Promise.allSettled
/*const promise1 = Promise.resolve("success");
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'failed'));
const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result)));
Promise.allSettled(promises).
  then((values) => console.log(values));
*/

// expected output:
// "fulfilled"
// "rejected"
//--------------------------------------------------------------------------------------------------------

//Promise.any()

/* const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value)); */

// expected output: "quick"
//---------------------------------------------------------------------------------------------

//Promise.prototype.finally()

/* function checkMail() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject(new Error('Failed to arrive'));
      }
    });
  }
  
  checkMail()
    .then((mail) => {
      console.log(mail);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Experiment completed');
    }); */

//------------------------------------------------------------------------------------------------
//Promise.prototype.catch()

/*const promise1 = new Promise((resolve, reject) => {
    throw 'Uh-oh!';
  });
  
  promise1.catch((error) => {
    console.error(error);
  });*/
  // expected output: Uh-oh!
//---------------------------------------------------------------------------------------------

//   Promise.race()

const promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"one");
});
const promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,500,"Two")
});
const promise3=[promise1,promise2];
Promise.race(promise3).then((value)=>{
    console.log(value)
});