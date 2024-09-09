// var a = 10;

// function init(value = "default") {
//     console.log("init");
//     var b = 20;

//     function show() {
//         var c = 30;
//         console.log("show");
//         console.log(a, b, value, c);
//     }
//     show();
// }

// init();

// chạy theo thứ tự
// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// var a = 10;
// var add = sum(a);
// var b = 20;
// console.log(add(b));
// var c = 30;
// console.log(add(c));

// var getMessage = function () {
//     console.log("hello");
// };

// getMessage();

////////////////////////////////////////////////
// IIFE
// (function (msg) {
//     console.log("hello " + msg);
// })("123");

////////////////////////////////////////////////

// Callback

// var showStudentInfo = () => {
//     console.log("show student info");
// };

// var showStudentInfo2 = () => {
//     console.log("show student info 2");
// };

// var showStudents = (func) => {
//     console.log("show students");
//     if (typeof func === "function") {
//         func();
//     }
// };

// showStudents(showStudentInfo);
// showStudents(showStudentInfo2);

// showStudents(function (course) {
//     console.log("show student info 3");
// });

// vd2
// var displayName = (course) => {
//     console.log("display name");
//     console.log(course);
// };

// var handleDisplayName = () => {
//     console.log("handle display name");
//     displayName("ReactJS 3");
// };

// setTimeout(handleDisplayName, 1000);

// luồng chạy: setTimeout -> handleDisplayName() -> displayName( )

// setTimeout(displayName, 1000, "ReactJS 1");

// cach 2
// setTimeout(function () {
//     displayName("ReactJS 2");
// }, 1000);

// vd3
// function getA(callback) {
//     setTimeout(() => {
//         console.log("get A");
//         if (typeof callback === "function") {
//             callback();
//         }
//     }, 1000);
// }

// function getB(callback) {
//     setTimeout(() => {
//         console.log("get B");
//         if (typeof callback === "function") {
//             callback();
//         }
//     }, 1000);
// }

// function getC(callback) {
//     setTimeout(() => {
//         console.log("get C");
//         if (typeof callback === "function") {
//             callback();
//         }
//     }, 500);
// }

// getB(() => {
//     getC(getA);
// });

////////////////////////////////////////////////////////
// bài khác: arguments
// function max() {
//     console.log(arguments);

//     function children() {
//         console.log(arguments);
//     }
//     children(1, 2, 3, 4, 5);
// }

// max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//////////////////////////////////////////////////////
// giải thuật đệ quy
function showNumber(i) {
    console.log(i);
    if (i > 0) {
        showNumber(i - 1);
    }
}

// showNumber(10);

function getTotal(n) {
    if (n === 1) {
        return 1;
    }
    return n + getTotal(n - 1);
}

console.log(getTotal(10));
