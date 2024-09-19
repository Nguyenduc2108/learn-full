var users = ["Hieu", "Anh", "Tuan", "Nam"];

// 19. forEach(callback) -> chỉ có tác dụng là duyệt qua từng phần tử của mảng, không dừng được
// users.forEach(function (user, index) {
//     console.log(user, index);
//     if (index === 1) {
//         // user = "abc";
//         users[index] = "abc";
//     }
// });
// console.log(users);

/* 20. map(callback):
    1. tạo ra mảng mới từ mảng cũ;
    2. phần tử của mảng mới là return trong callback 
    3. số lượng phần tử của mảng mới bằng số lượng phần tử của mảng cũ
*/

// var newArr = users.map(function (user, index) {
//     // console.log(user, index);
//     return `<h3>${user}</h3>`;
// });

// console.log(newArr);

// 21. filter(callback) -> tạo ra mảng mới từ mảng cũ, với điều kiện trong callback, duyệt qua từng phần tử của mảng cũ
// var newArr = users.filter(function (user, index) {
//     console.log(user, index);
//     return user.length > 3;
// });

// console.log(newArr);

// Bài tập 01:
var customers = ["Nguyen Van Anh", "Luu Chi Cin", "Tran Le Boi", "Nguyen Thi Dung"];

// var keyword = "an";
// var newUsers = customers.filter(function (customer) {
//     return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(newUsers);

// Bài tập 02:
var keywords = "Luu Chi Cin";
var newUsers = customers.filter(function (customer) {
    return customer.toLowerCase() !== keywords.toLowerCase();
});
// console.log(newUsers);

// Bài tập 03:
var fullname = "nguyen van anh";
fullname = fullname
    .split(" ")
    .map((word) => {
        var standardName = word.charAt(0).toUpperCase() + word.slice(1);
        return standardName;
    })
    .join(" ");

// console.log(fullname);

// 22. some(callback) -> trả về true nếu có ít nhất 1 phần tử thỏa mãn điều kiện trong callback, duyệt qua từng phần tử của mảng, trả về true hoặc false
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = numbers.some((number) => number % 2 === 0);
// console.log(result);

// 23. every(callback) -> trả về true nếu tất cả phần tử trả về true, duyệt qua từng phần tử của mảng, trả về true hoặc false

var numbers = [1, 2, 3, 5, 7, 9];
var result = numbers.every((number) => number % 2 !== 0);
console.log(result);
