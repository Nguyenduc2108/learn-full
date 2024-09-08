/**
 * 1.Câu lệnh rẽ nhánh if else
 *
 * 1.1. condition thiếu
 * if (condition) {
 *  // code
 * }
 *
 * 1.2. condition đầy đủ
 * if (condition) {
 * // code true
 * } else {
 * // code false
 * }
 *
 * 1.3. else if
 * if (condition1) {
 * // code 1
 * } else if (condition2) {
 * // code 2
 * } else {
 * // code 3
 * }
 *
 * 1.4 lồng nhau
 * if (condition1) {
 * // code 1
 *      if (condition2) {
 *    // code 2
 *     } else {
 *   // code 3
 *    }
 * } else {
 * // code 4
 * }
 */

var num = 10;

if (num) {
    console.log("gia tri dung");
} else {
    console.log("gia tri sai");
}

document.write(`<h1>${num}</h1>`);

// bài tập
var salary = 16000000;
var income = 0;
var rate;

if (salary <= 5000000) {
    rate = 0;
} else if (salary > 15000000) {
    rate = 5;
} else {
    rate = 3;
}
income = salary - (salary * rate) / 100;

console.log(income);

// VD 2
var email = "",
    password = "";

if (email === "" || password === "") {
    if (email === "") {
        console.log("Email không được để trống");
    } else {
        console.log("Password không được để trống");
    }
} else {
    console.log("Đăng nhập thành công");
}
