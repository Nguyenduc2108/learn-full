console.log(Array.prototype);
console.log([Array]);

// Phương thức tĩnh trong array
var users = ["Hieu", "Anh", "Tuan", "Nam"];
// 1.Array.isArray()
// console.log(Array.isArray(users)); // true

// 2.Array.from()
function test() {
    var data = Array.from(arguments);
    // console.log(Array.isArray(data));
}
test(1, 2, 3);

// Phương thức non-static -> phụ thuộc vào đối tượng
// 3.length
// console.log(users.length);

// 4.concat()
var users2 = ["Hieu 2", "Hoa 2", "Huy 2"];
// console.log(users.concat(users2));

// 5.fill()
// console.log(users.fill("Hieu 3", 1, 2));

// 6.includes()
// console.log(users.includes("Hieu"));

// 7.indexOf()
// console.log(users.indexOf("aa"));
// console.log(users.indexOf("Huy"));

// 8.lastIndexOf()
// console.log(users.lastIndexOf("Huy"));
// console.log(users.lastIndexOf("aa"));

// 9.join()
// console.log(users.join(" - "));
// console.log(users.join());

// 10.push()
users.push("Hieu 3");
// console.log(users);

// 11.unshift()
users.unshift("Hieu 4");
// console.log(users);

// 12.pop()
users.pop();
// console.log(users);

// 13.shift()
users.shift();
// console.log(users);

// 14.splice()
// var value = users.splice(1, 1, "Hoa 3");
// console.log(users);
// console.log(value);

// 15.slice(start, end) -> cắt mảng từ start đến end - 1
// console.log(users.slice(1, 2));
// console.log(users.slice(1));
// console.log(users.slice()); // copy mảng

// 16. keys() -> lấy danh sách các key và trả về 1 mảng
var newArr = Array.from(users.keys());
// console.log(newArr);

// Tips - 01: Khởi tạo 1 array chứa 100 elements bắt đầu từ 0, 1, 2, 3,..., 99
var range = Array.from(Array(100).keys());
// console.log(range);

// Tips - 02: Lấy giới hạn số lượng elements trong mảng ban đầu
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C"];
arr.length = 5;
// console.log(arr);

// 17. sort()
users.sort();
// console.log(users);

var numbers = [1, 10, 2, 5, 9, 3, 4];
numbers.sort(function (a, b) {
    // a: phần tử sau
    // b: phần tử trước
    // nếu hàm trả về số âm thì sẽ đổi chỗ a, b
    return a - b;
});
console.log(numbers);

// bài tập
// bài 1: Sắp xếp theo tên
var customers = ["Nguyen Van Anh", "Luu Van Cin", "Tran Van Boi", "Dang Thi Dung"];

// way 1
customers.sort(function (a, b) {
    var name1 = a.split(" ").pop();
    var name2 = b.split(" ").pop();
    return name1.localeCompare(name2, "vi", { sensitivity: "base" });
});
console.log(customers);

// way 2
function getFirstName(fullname) {
    return fullname.split(" ").slice(-1).join(" ").toLowerCase(); // way 1
    // return fullname.split(" ").pop(); // way 2
}

customers.sort(function (a, b) {
    return getFirstName(a) - getFirstName(b);
});
console.log(customers);

// 18. reverse()
console.log(users.reverse());
