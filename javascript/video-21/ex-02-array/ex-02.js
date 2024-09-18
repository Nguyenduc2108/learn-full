console.log(Array.prototype);

var users = ["John", "Paul", "George", "Ringo"];
// console.log(users);
// console.log(users[0]);
// users[0] = "John Lennon";
// console.log(users[0]);
users[users.length] = "Brian";
console.log(users);

// 1.Duyệt mảng for
// for (var i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// 2.Duyệt mảng for in
// for (var i in users) {
//     console.log(users[i]);
// }

// 3.Duyệt mảng for of
// for (var user of users) {
//     console.log(user);
// }

// 4. Xóa phần tử trong mảng
var result = [];
var count = 0;
for (var i in users) {
    if (i !== "2") {
        result[count] = users[count];
        count++;
    }
}
console.log(result);

// Exercise 1: thêm 1 phần tử vào đầu mảng không dùng hàm unshift

//way 1
// var users = ["John", "Paul", "George", "Ringo"];
// var result = [];
// var count = 0;
// var fistEl = "123";

// result[0] = fistEl;

// for (var i in users) {
//     result[count + 1] = users[count];
//     count++;
// }

// console.log(result);

//way 2
var users = ["John", "Paul", "George", "Ringo"];
var newVal = "123";
var result = [newVal];

for (var user of users) {
    result[result.length] = user;
}
console.log(result);
