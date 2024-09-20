// 24. find()

// var users = ["John", "Jane", "Alice", "Bob"];
// console.log(users.indexOf("Alice")); // 2

var users = [
    ["John", "john@gmail.com"],
    ["Jane", "jane@gmail.com"],
    ["Alice", "alice@gmail.com"],
    ["Jane 2", "jane@gmail.com"],
];

// var newUser = users.find((user) => user[1] === "jane@gmail.com");

// console.log(newUser);

// // 25. findLast()
// var newUser = users.findLast((user) => user[1] === "jane@gmail.com");

// console.log(newUser);

// // 26. findIndex()
// var newUser = users.findIndex((user) => user[1] === "jane@gmail.com");

// console.log(newUser);

// // 27. findLastIndex()

// var newUser = users.findLastIndex((user) => user[1] === "jane@gmail.com");

// console.log(newUser);

// bài tập
var users = [
    ["John", "john@gmail.com", 120],
    ["Jane", "jane@gmail.com", 30],
    ["Alice", "alice@gmail.com", 25],
    ["Alice 3", "alice@gmail.com", 80],
    ["Alice 2", "alice@gmail.com", 80],
];

// way 1
// var maxAge = Math.max(...users.map((user) => user[2]));

// var admin = users.find((user) => user[2] === maxAge);
// admin[1] = "admin@gmail.com";

// console.log(users);

// way 2
// var ageList = users.map((user) => user[2]);
// var max = ageList[0];
// ageList.forEach((age) => {
//     if (age > max) {
//         max = age;
//     }
// });

// users.find((user) => {
//     if (user[2] === max) {
//         user[1] = "admin@gmail.com";
//     }
// });

// console.log(users);

// way 3
// var maxUser = users[0];
// users.forEach((user) => {
//     if (maxUser[2] < user[2]) maxUser = user;
// });
// maxUser[1] = "admin@gmail.com";
// console.log(users);

// way 4
var maxUser = users[0];
var indexUser = 0;
users.forEach((user, index) => {
    if (maxUser[2] < user[2]) {
        maxUser = user;
        indexUser = index;
    }
});

if (indexUser || indexUser === 0) {
    users[indexUser][1] = "admin@gmail.com";
}
console.log(users);

// săp xếp mảng theo tuổi tăng dần
// users.sort((a, b) => a[2] - b[2]);
// console.log(users);
