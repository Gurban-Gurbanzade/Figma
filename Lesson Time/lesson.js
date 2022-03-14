//
// let araliq = {
//   start: 1,
//   end: 5,
// };

// araliq[Symbol.interator] = function () {
//   return {
//     current: this.start,
//     last: this.end,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };
// for (let num of araliq) {
//   alert(num);
// }

// let map = new Map();

// map.set("1", "str1");

// alert(map.get("1"));

// alert(map.size);

// let map = new Map(
//   Object.entries({
//     name: nail,
//     age: 26,
//   })
// );

// let yeniMap = newMap;
// let set= new Set{};

// let nail ={name,"nail"};
// let nail ={name,"elmar"};
// let nail ={name,"elvin"};

// set.add{nail};
// set.add{elmar};
// set.add{mary};
// alert{set.size}
// let set=new Set{["portagal","alma","heyva"]}

let nail = { name: "Nail" };
let map = new Map();
map.set(nail, "...");
nail = null;
map.keys(nail);

console.log(map);
