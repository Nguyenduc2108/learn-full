/*
    - function

    function tenHam() {
        // code
    }

 */

function showMessage(msg, type = "success") {
    console.log("Hello World");
    console.log(msg);
    console.log(type);
}

// gọi hàm
showMessage("123"); // lời gọi hàm chủ động

// lời gọi hàm bị động => ko có () => gọi hàm theo kiểu callback

function sum(a, b) {
    var total = a + b;
    // console.log(total);
    return total;
}

var result = sum(10, 20);

console.log(result);

function division(a, b) {
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}

console.log(division(10, 0));
console.log(division(10, 2));

var message = "hoc kho vcl";

function showMessage2() {
    return message;
}

function setMessage(newMessage) {
    message = newMessage;
}

setMessage("Hello World");
console.log(showMessage2());
