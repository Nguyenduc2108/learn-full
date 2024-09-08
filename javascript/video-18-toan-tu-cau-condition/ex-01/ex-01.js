// 2. Toán tử gán (=)
/**
 * Toán tử gán mở rộng
 * += , -=, /=, *= , %=
 */

var a = 10;
// a = a + 10;
a += 10;
console.log(a);

// 3. Toán tử quan hệ : > < >= <= == === !=  !==
var a = "10" === 10;
console.log(a);

// 4. Toán tử kết hợp: Và (&&) , Hoặc (||) , Phủ định (!)

// 5. Toán tử 3 ngôi: (condition) ? true : false
var a = 10;
var b = a >= 10 ? "Đúng" : "Sai";
console.log(b);

// 6. Toán tử nullish: ??
var a = void 0;
var b = a ?? "Giá trị mặc định";
console.log(b);

// viết toán tử nullish bằng toán tử 3 ngôi
var a = false;
var b = a !== null && a !== undefined ? a : "Giá trị mặc định";
console.log(b);

// 7. Truthy, Falsy
// Falsy: 0, '', "", null, undefined, NaN, false => ép kiểu về false
// Truthy: Các giá trị còn lại => ép kiểu về true
var a = 0;
if (a) {
    console.log("True");
} else {
    console.log("False");
}

// 8. Toán tử &&
var a = 10;
var b = a && "hello";
console.log(b);

// 9. Toán tử ||
var a = 0;
var b = a || "0 xac dinh";
console.log(b);
