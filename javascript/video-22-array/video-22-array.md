## 3. Array (part 2)

### 3.1 Array methods (part 2)

#### 3.1.1 phương thức tĩnh

    - là phương thức không phụ thuộc vào đối tượng

    1. Array.isArray()
    -> check a variable có phải array không

    2. Array.from() -> convert data type != về array
    (ép kiểu)

#### 3.1.2 phương thức non-static (phụ thuộc vào đối tượng)

    3. length
    4. concat() -> nối array, thêm vào array

    5.fill() -> thay thế all các phần tử array thành 1 giá trị (thường dùng để reset)

    6. includes() -> tìm phần tử trong array
    -> trả về true / false

    7. indexOf()
    8. lastIndexOf()

    9. join() -> nối các phần tử trong array thành string

    10. push() -> add elements to the end of the array
    -> return về số lượng el sau khi thêm

    11. unshift() -> add elements to the start of the array

    12. pop() -> remove elements cuối array
    -> return về el vừa xóa

    13. shift() -> remove elements đầu array
    -> return el vừa xóa

    14.splice() -> remove elements at(tại) index, can chèn thêm vào vị trí vừa remove
    -> return về 1 array chứa elements vừa xóa

    15.slice() -> cắt array từ index đến end-1

    16. keys() -> lấy danh sách các key và trả về 1 array

=> Tips - 01: khởi tạo 1 mảng chứa 100 phần tử bắt đầu từ 0,1,2,3...99 ((DOM cũng dùng tip này)): - Array.from(Array(100).keys())

=> Tips - 02: Lấy giới hạn số lượng elements trong mảng ban đầu: - arr.length = ???

    17. sort() -> sắp xếp array theo thứ tự tăng dần (theo string)
        - sắp xếp số:
            + tăng dần: a - b
            + giảm dần: b - a
    => Nguyên tắc: hàm trả về số âm thì đổi chỗ a,b

##### localeCompare() -> so sánh 2 chuỗi với nhau -> trả về 1 số (String method)

    18. reverse() -> đảo ngược array

#### 3.1.3 phương thức vòng lặp trong Array

    - đều không dừng được

    19. forEach(function) -> lặp qua từng phần tử mảng và trả về value, index ở callback

    20. map(callback):
        - duyệt qua các elements của array ban đầu
        - trả về 1 new array
        - giá trị elements của new array phụ thuộc vào giá trị trả về của callback (return)

    21. filter():
        - duyệt qua các elements của array ban đầu
        - return 1 new array
        - giá trị elements của new array là các phần tử của mảng ban đầ nếu callback return true

=> Thường dùng để lọc, xóa

    22. some():
        - duyệt qua elements của array
        - trả về true / false
        - trả về true nếu có ít nhất 1 phần tử trả về true
        - trả về false nếu không có phần tử nào trả về true

=> tìm ra true thì dừng luôn.

    23. every():
        - duyệt qua elements của array
        - trả về true / false
        - trả về true nếu tất cả phần tử true
        - trả về false nếu có ít nhất 1 phần tử false
        - vòng lặp sẽ dừng khi có 1 element không trả về true

==> every() ngược lại với some().

##### Case thực thế: check, check all (gmail, check sản phẩm để xóa, thanh toán, ...)
