//Function constructor
/*
Tên hàm: 
- danh từ
sử dụng quy tắc PascalCase



Phương thức static, thuộc tính static:
(định nghĩa qua tên hàm tạo : TenHamTao.tenThuocTinh, TenHamTao.tenPhuongThuc)
- truy cập trực tiếp từ tên hàm tạo
- không bị phụ thuộc bởi đối tượng
- từ khóa this trong phương thức static => nội dụng của hàm tạo

2. phương thức non-static, thuộc tính non-static ( được định nghĩa trong hàm tạo hoặc thông qua prototype)
- bắt buộc phải gọi qua đối tượng ( được khởi tạo từ hàm tạo)
- bị phụ thuộc bởi đối tượng
- từ khóa this trong phương thức non-static => trả về đối tượng
*/

function User(name, age) {
    // Dinh nghia thuoc tinh
    this.name = name;
    this.age = age;

    // dinh nghia phuong thuc
    this.showInfo = function () {
        return `${this.name} ${this.age}`;
    };
}

var user = new User("van duc", 23);
console.log(user);

// static method, static property

// Exercise ham tao: Calculator

// function Calculator(a, b) {
//     this.a = a;
//     this.b = b;
//     this.plus = function () {
//         return +this.a + +this.b;
//     };
//     this.minus = function () {
//         return this.a - this.b;
//     };
//     this.multiplication = function () {
//         return this.a * this.b;
//     };
//     this.division = function () {
//         if (b !== 0) return this.a / this.b;
//         return "So khong hop le";
//     };
// }

// var number = new Calculator(2, 3);
// console.log(number.minus());

// way 2
// function Calculator() {}
// Calculator.prototype.add = function (a, b) {
//     return +a + +b;
// };
// Calculator.prototype.sub = function (a, b) {
//     return a - b;
// };
// Calculator.prototype.multi = function (a, b) {
//     return a * b;
// };
// Calculator.prototype.div = function (a, b) {
//     if (+b !== 0) return a / b;
//     throw new Error("ko duoc chia cho so 0");
// };

// var calc = new Calculator();
// console.log(calc.add(10, 20));
// console.log(calc.sub(10, 20));
// console.log(calc.multi(10, 20));
// console.log(calc.div(10, 2));

// // Kiểm tra 1 object được tạo từ hàm tạo nào
// console.log(calc.constructor.name); // way 1
// if (calc.constructor.name === "Calculator") {
//     console.log("tao tu ham ");
// }

// console.log(calc instanceof Calculator); // way 2

// kiểm tra 1 biến có phải Object hay không
// var a;

// Object.isObject = function (variable) {
//     if (variable && variable.constructor && variable.constructor.name === "Object") {
//         return true;
//     }
//     return false;
// };

// if (Object.isObject(a)) {
//     console.log(`la object`);
// } else {
//     console.log(`khong la object`);
// }

// Toán tử Optional Chaining(?.)
// var a = null;
// console.log(a?.name);
// console.log(a?.name?.info?.email);

// var a = {};
// console.log(a.getName?.());

var a = null;

if (a?.length) {
    a.forEach?.((item) => {
        console.log(item);
    });
}
