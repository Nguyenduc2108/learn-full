## 2.4 Các phương thức của String (tiếp video 20)

    11. search() === includes()

    12. split() -> cắt chuỗi thành Array dựa vào ký tự phân cách

=> Dùng để xử lý các bài toán string advance

    12. toUpperCase()
    13. toLowerCase()

    14. trim()
    15. trimStart(), trimLeft() -> cắt khoảng trắng đầu string
    16. trimEnd(), trimRight() -> Cắt khoảng trắng cuối string

    17. math() -> cắt chuỗi = biểu thức chính quy(regex)

### Các case xử lý chuỗi

    1. search (=== ctrl + F)

    2. kiểm tra mật khẩu nào mạnh, mật khẩu nào yếu
        - trả về thông báo mật khẩu yếu, nhưng yếu chỗ nào, thiếu cái gì

    3. bài toán karaoke

## 3. Array

    - kiểu dữ liệu tham chiếu
    - tập hợp nhiều giá trị trong 1 biến
    - bản chất là object

    - 2 phần:
        + element: giá trị của 1 phần tử trong array
        + index(start: 0): chỉ số để của phần tử trong array

    - có 2 loại mảng:
        + 1 chiều
        + đa chiều

### 3.1 Array methods

    1. truy cập
    2. thay đổi giá trị
    3. thêm phần tử mới vào cuối array
    4. duyệt array(for, for in, for of)
        + for in: trả về index của từng phần tử (dùng cả cho object)
        + index trong for in là string

        + for of: trả về element (không lấy ra được index)

=> Lưu ý: - for in lấy được cả index và key

    5. delete phần tử trong array
