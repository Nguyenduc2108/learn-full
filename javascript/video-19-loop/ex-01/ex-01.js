// for(gia_tri_khoi_tao; dieu_kien_dung; buoc_nhay)

// for (var i = 1; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }
//scope

// for (var i = 1; i < 5; i++) {
//     for (var j = 1; j < 5; j++) {
//         console.log("i = " + i + ", j = " + j);
//     }
// }

// Bài tập 1
// var n = 10;
// var total = 0;
// for (var i = 1; i <= n; i++) {
//     total += i;
// }

// console.log(total);

// Bài tập 2:
// var n = 10;
// var sum = 0;
// var count = 0;
// for (var i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//         count++;
//     }
// }

// var avg = sum / count;
// console.log(avg);

// Bài tập 3: 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
// var n = 5;
// var total = 0;
// var multi = 1;
// for (var i = 1; i <= n; i++) {
//     multi *= i;
//     total += multi;
// }

// console.log(total); // 1 + 2 + 6 + 24 + 120 = 153

// Bài tập 4:
// var n = 5;

// var isPrime = (n) => {
//     if (n < 2 || n % 1 !== 0 || typeof n !== "number" || isNaN(n)) {
//         return false;
//     }

//     for (var i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// };

// if (isPrime(n)) {
//     console.log(n + " is a prime number");
// } else {
//     console.log(n + " is not a prime number");
// }

var n = 10;
var isPrime = true;
if (n % 1 !== 0 || n < 2) {
    isPrime = false;
} else {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break; // i = n
        }
    }
}

if (isPrime) {
    console.log(n + " is a prime number");
} else {
    console.log(n + " is not a prime number");
}
/**
 * while (dieu_kien_dung) {
 *     // code
 * }
 */

var i = 1;
var n = 10;
var total = 0;
while (i <= n) {
    total += i;
    i++;
}

console.log(total);

/**
 * do {
 *    // code
 * } while (dieu_kien_dung)
 *  => code sẽ chạy ít nhất 1 lần
 */
