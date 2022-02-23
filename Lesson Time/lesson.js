// let user = {
//   name: "nail",
//   age: 26,
// };

// alert(user.name);
// alert(user.age);

// user.adminMi = true;

// delete user.age;

// let user = {
//   name: "nail",
//   age: 26,
// };

// let key = promt("name");
// alert(user[key]);

// let obj = {};
// obj.__proto__ = 5;
// alert(obj.__proto__);

// function creatUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let user = creatUser("nail", 26);
// alert(user.name);

// let obj = {
//   test: undefined,
// };
// alert(obj.test);

// let kodlar = {
//   994: "Azerbaycan",
//   49: "Almaniya",
//   41: "Isvecre",
//   44: "Ingiltere",
//   1: "Amerika",
//   23: "Baki",
// };

// for (let kod in kodlar) {
//   alert(kod);
//}

// let user = { name: "nail" };
// let admin = user;
// admin.name = "elmar";
// alert(admin.name);

// let a = {};
// let b = {};
// alert(a == b);

// const user = {
//   name: "nail",
// };
// user={
//     name = "elmar";
// }
// user.age = 26;
// alert(user.name);

// let user = {
//   name: "nail",
//   age: 30,
// };
// let clone = {};
// for (let key in user) {
//   clone[key] = user[key];
// }
// clone.name = "elmar";
// alert(user.name);
// alert(clone.name);

let user = {
  name: "nail",
  body: {
    uzunluq: 182,
    eni: 50,
  },
};
let clone = Object.assign({}, user);
alert(user.body === clone.body);
console.log(user.body.uzunluq);
