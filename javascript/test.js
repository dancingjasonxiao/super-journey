// function getType (obj) {
//     let type = typeof obj;

//     if (type !== 'object') {
//         return type
//     }
//     return Object.prototype.toString.call(obj)
// }

// console.log(getType(1));
// console.log(getType([]));
// console.log(getType({}));
// console.log(getType(function () {}));

// Function.prototype.a = 'aa';
// function MyFun () {};
// var fun = new MyFun();
// console.log(fun.a);
// console.log(MyFun.a);

async function async1() {

  console.log("async1 start"); // 1

  await async2();

  console.log("async1 end"); // 6

}

async function async2() {

  console.log("async2"); // 2

}

async1();

setTimeout(() => {

  console.log("timeout"); // 7

}, 0);

new Promise(function (resolve) {

  console.log("promise1"); // 3

  resolve();

}).then(function () {

  console.log("promise2"); // 5

});

console.log("script end"); // 4