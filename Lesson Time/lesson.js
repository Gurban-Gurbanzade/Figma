// salamVer("nail");
// function salamVer(ad) {
//   alert(`salam, ${ad}`);

// let salamVer = function (ad) {
//   alert(`salam, ${ad}`);
// };

// let yas = prompt("nece tasin var", 18);
// if (yas < 18) {
//   function salam() {
//     alert("salam!");
//   }
//   salam();
// } else {
//   function salam() {
//     alert("salamlar!");
//   }
//   salam();
// }

// let yas = prompt("yasi daxil edin");
// if (yas > 18) {
//   function
//   alert("yas 18den boyukdur");
// }
// else {
//   alert("yas 18den kicikdir");
// }

// function evlendirme(kishi, qadin) {
//   qadin.xanim = kishi;
//   kishi.bey = qadin;

//   return {
//     ata: kishi,
//     ana: qadin,
//   };
// }

// let aile = evlendirme(
//   {
//     name: "mecnun",
//   },
//   {
//     name: "leyla",
//   }
// );
// console.log(aile);

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// alert(id1 == id2);

// let user = { name: "nail",id=Symbol("id") };
// user[id] = "ID deyeri";
// alert(user[id]);

// let cinsi = Symbol("");
// let user = {
//   name: "qurban",
//   age: 29,
//   position: "muhendis",
//   [cinsi]: "kisi",
// };
// for (key in user) {
//   console.log(key, user[key]);
// }

let name1 = Symbol("qurban");
let name2 = Symbol("nail");

alert(Symbol.keyFor(Symbol.for("name")));
alert(Symbol.keyFor(Symbol.for("name2")));
