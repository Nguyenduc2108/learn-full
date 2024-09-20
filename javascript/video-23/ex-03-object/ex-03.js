/*
// Object (đối tượng)

- thuộc tính (đặc điểm) : biến
- phương thức (hành động): hàm


Các cách tạo object trong JS:

    1. Object literal -> tạo từ hàm Object

    2. Function Constructor

    3. Class (ES6)

*/

// console.log([Object]);
// console.log(Object.prototype);
var users = {};
// console.log(users, typeof users);

// kiểm tra 1 biến có phải object không
if (typeof users === "object" && !Array.isArray(users) && users !== null) {
    // console.log("Đây là object");
}

/*
- Cấu tạp của 1 object:
    {
    key1: value1,
    key2: value2,
    }
*/

var user = {
    name: "Teo",
    email: "teo@gmail.com",
    address: "Hà Nội",
    getAge: function () {
        return 18;
    },
};

// thêm key vào object
user.country = "Việt Nam";
user["phone"] = "0123456789";

// Sửa giá trị của key trong object
user.name = "Tèo";

// Xóa key trong object
delete user.address;

// tình huống: Computed Property
var key = "history";

user[key] = "Lịch sử";

// console.log(user);
// console.log(user.getAge());

// truy cập vào key của object
// console.log(user.name);
// console.log(user["email"]); // -> nếu ko có dấu "" thì nó sẽ hiểu là biến và nó sẽ không tìm thấy cái biến đó

// Duyệt qua các key trong object
// for (var key in user) {
//     if (typeof user[key] === "function") {
//         console.log(user[key]());
//     } else {
//         console.log(key, user[key]);
//     }
// }

// 1. Lấy danh sách các key trong object và trả về 1 mảng
var keys = Object.keys(user);
// console.log(keys);

var error = {};
// 2. kiểm tra 1 object có dữ liệu hay không
if (Object.keys(error).length) {
    // console.log("Có dữ liệu");
} else {
    // console.log("Không có dữ liệu");
}

// 3. lấy danh sách các value trong object và trả về 1 mảng
var values = Object.values(user);
// console.log(values);

// 4. lấy danh sách các key và value trong object và trả về mảng 2 chiều:
// (key là phần tử đầu tiên, value là phần tử thứ 2)

var entries = Object.entries(user);
// console.log(entries);

// 5. Chuyển mảng 2 chiều thành object
var result = Object.fromEntries(entries);
// console.log(result);

// 6. Nối object
var user2 = {
    name: "Tí",
    email: "ti@gmail.com",
};

// var user3 = Object.assign({}, user, user2);
// var user3 = Object.assign(Object.assign({}, user), user2);
var user3 = { ...user, ...user2 };
// console.log(user3);
// console.log(user);

// thường object sẽ ở trong 1 mảng
var users = [
    {
        id: 1,
        name: "Tèo",
        email: "teo@gmail.com",
    },

    {
        id: 2,
        name: "Tí",
        email: "ti@gmail.com",
    },
];

console.log(users);
