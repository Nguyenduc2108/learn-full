/*
// 28. reduce():
    - duyệt qua từng phần tử của mảng

   - cú pháp: var result = array.reduce(callback, initialValue);
   
   - trong callback: 3 parameter
        + prevValue
        + currentValue
        + index

    - Cách hoạt động:

    TH1: có initialValue:
        - Vòng lặp sẽ chạy từ phần tử có index = 0
        - prevValue của lần chạy đầu tiên sẽ là initialValue
        - currentValue: giá trị từng phần tử của mảng 

    TH2: không có initialValue:
        - Vòng lặp sẽ chạy từ phần tử có index = 1
        - prevValue của lần chạy đầu tiên sẽ là phần tử đầu tiên của mảng
        - currentValue: giá trị từng phần tử của mảng

prevValue của lần chạy sau là return của lần chạy trước đó

=> kết quả trả về của hàm reduce() là return cuối cùng của prevValue trong callback

*/

var numbers = [5, 10, 15, 20, 25];

var result = numbers.reduce(function (prevValue, currentValue, index) {
    // console.log(prevValue, currentValue);
    return prevValue + currentValue;
});

console.log(result);

// bài tập 01:
var numbers = [5, 10, 100, 15, 20, 25];
var result = numbers.reduce((max, number) => (max > number ? max : number));

console.log(result);

// bài tập 02:
var arrA = [1, 3, 5, 7, 9];
var arrB = [1, 5, 7];

var result = arrA.reduce((arr, number) => {
    // !arrB.includes(number) && arr.push(number); // way 1
    if (!arrB.includes(number)) arr.push(number); // way 2
    // return !arrB.includes(number) ? arr.concat(number) : arr, arr; // way 3 (cách đi làm hay viết)
    return arr;
}, []);

console.log(result); // [3, 9]

// Tham chiếu:
var a = [1, 2, 3];
// var b = a;
var b = a.slice(); // copy mảng a sang mảng b // way 1
// var b = a.concat(); // way 2
// var b = Array.from(a); // way 3
var b = a.map((item) => item); // way 4

// var b = [...a]; // way 5
// => shallow copy

var b = JSON.parse(JSON.stringify(a)); // deep copy

b[1] = 100;

console.log(a);
console.log(b);
