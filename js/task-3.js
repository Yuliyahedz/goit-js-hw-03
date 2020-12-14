const findBestEmployee = function (employees) {
  for (let key in employees) {
  }
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

//   let keys = Object.keys(employees);
//   let anyEmployee = keys[0];
//   let bestEmployee = anyEmployee;
//   for (const key of keys) {
//     if (employees[bestEmployee] > employees[key]) continue;
//     bestEmployee = key;
//   }
//   return bestEmployee;
// };
