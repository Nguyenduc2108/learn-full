// string: Kiểu dữ liệu nguyên thủy(primitive data type)
/**
 * 1. Hoạt động gióng Object(kiểu dữ liệu tham chiếu)
 *
 */

// var str = "Hello World";
// console.log(typeof str); // string
// if (typeof str === "string") {
//     console.log("Đây là kiểu dữ liệu string");
// }

//----------------------------------------------
// các cách khai báo string
// var a = "new 1";
// var b = String("new 2");
// var c = new String("new 3");

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c, c.length);

//----------------------------------------------
// hàm tạo chuỗi
console.log(String.prototype);

//----------------------------------------------
// Các phương thức của string
// 1. length
var str = "Hello World";
console.log(str.length);

// 2. at(index), charAt(index) -> lấy ký tự tại vị trí index ban đầu từ 0
console.log(str.at(0));
console.log(str.charAt(1));

// 3. charCodeAt(index) -> lấy mã ASCII của ký tự tại vị trí index
console.log(str.charCodeAt(0));

// 4. concat(string) -> nối chuỗi (+)
console.log(str.concat("!!!"));

// 5. includes(string) -> kiểm tra, tìm chuỗi có chứa chuỗi con không (true/false)
console.log(str.includes("Hello"));

// 6. indexOf(string) -> tìm vị trí đầu tiên của chuỗi con trong chuỗi
console.log(str.indexOf("World"));

// 7. lastIndexOf(string) -> tìm vị trí cuối cùng của chuỗi con trong chuỗi
console.log(str.lastIndexOf("o"));

// 8.slice(start, end) -> cắt chuỗi từ vị trí start đến end - 1
console.log(str.slice(0, 5));

// 9. replace(string, string) -> thay thế chuỗi con trong chuỗi, thay thế từ khóa đầu tiên tìm thấy
console.log(str.replace("World", "Viet Nam"));

// 10. replaceAll(string, string) -> thay thế chuỗi con trong chuỗi, thay thế tất cả từ khóa tìm thấy
console.log(str.replaceAll("o", "0"));
