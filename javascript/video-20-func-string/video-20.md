# Function

## 1. Closure: là hàm có thể truy cập thuộc tính / biến của scope chứa nó

    - đảm bảo tính kế thừa, đóng gói

    - return tenham => ko có ()

    - có 3 phạm vi hàm closure truy cập được:
        1. biến cục bộ của chính nó
        2. biến cục bộ của hàm cha
        3. biến toàn cục

=> all tất cả các hàm đều làm hàm closure

## 1.1: Expression function

    1. hàm ẩn danh
    (hàm không tên (anonymous function))

## 1.2 IIFE

(function() {})()

## 1.3 Callback

-   1 hàm được truyền vào 1 hàm khác thông qua tham số => đgl callback

-   có 2 cách để dùng tham số của callback
    1. tại hàm gọi callback => thêm 1 tham số
    2. tạo hàm ko có tham số để gọi hàm có tham số

=> thường đùng để xử lý bất đồng bộ

### setTimeout and setInterval

    1. setTimeout(callback, time(ms) delay)
        => delay quá trình thực thi hàm callback

## 1.4 giải thuật đệ quy ( chạy chậm hơn vòng lặp)

=> xử lý đa cấp: (xử lý tối đa 4 cấp )

        1. menu đa cấp
        2. comment đa cấp
        3. chuyên mục đa cấp
        4. modun bài học đa cấp
        5. mô hình đa cấp lũy tuyến
        (gửi hoa hồng cho cấp trên, cấp dưới)

=> duyệt cây nhị phân (xử lý vấn đề đa cấp nhiều cấp )
(tốc độ nhanh, cập nhật lâu)

    chú ý:

        1. gọi lại chính hàm đang định nghĩa
        2. phải có điều kiện dừng
        3. phải thay đổi đối sô để === với điều kiện dừng

# 2. String

## 2.1 cách kiểm tra 1 biến là String

    typeof tenbien === "string"

## 2.2 các cách khai báo chuỗi

     tenbien = ""
     tenbien = String()
     tenbien = new String()

## 2.3 Mỗi kiểu dữ liệu đều có 1 hàm tạo

## 2.4 Các phương thức của String

    1. length

    2. at(),charAt() -> lấy vị trí theo index

    3. charCodeAt() -> lấy mã ASCII theo index

    4. concat() => nối chuỗi

    5. includes(string) => kiểm tra chuỗi con trong chuỗi cha(true/ false)

    6. indexOf(string) => tìm chuỗi con trong chuỗi cha => trả về index đầu tiên tìm được, không thấy trả về -1

    7. lastIndexOf(string)

    8. slice(start, end)

    9. replace(string, string):
        - có hỗ trợ thay thế bằng biểu thức chính quy (Regular Expression)

    10. replaceAll(string, string)
