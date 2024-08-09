# 1. Thuộc tính CSS

    . Các giá trị mặc định hay dùng:
        . initial => giá trị mặc định của trình duyệt
        . inherit => kế thừa element cha
        . unset => về mặc định

    . Các đơn vị trong CSS
        1. Đơn vị tuyệt đối:
            . pixel (px)
            . point (pt) 1pt = 1.3px

        2. Đơn vị tương đối:
            . em -> tương đối với thành phần cha
            . % -> tương đối với thành phần cha

            . rem => tương đối với mặc định trình duyệt

            . vh , vw => học ở thuộc tính with, height

    . color, color Opacity, color Transparent, currentColor

    . font-size

    . font-family, font-weight, font-style
        . nạp phông : @font-face(at-rule)
            . ví dụ: @font-face {
                        font-family: "My Custom Font";
                        src: url("./fonts/Poppins-Bold.ttf");
                    }
        . serif => họ phông có chân
        . san-serif => họ phông không có chân

    . letter-spacing
    . word-spacing
    . line-height(để tương đối)

    . text-decoration: đường line chữ
    . text-transform: kiểu chữ
    . text-indent: thụt đầu dòng mỗi đoạn văn

    . word-wrap: break-word;
    . white-space: xử lý khoảng trắng

    . text-align: áp dụng với tag block

    . intro => display: inline , block, inline-block
    . intro => width , height, border: solid

## 1.1 Case

    . trong bình luận => xử lý chữ để bẻ xuống
        . word-wrap: break-word; ( bẻ luôn chữ thành 1 hàng mới)

        . word-break: break-all; (nối tiếp xong mới xuống hàng mới)

# 2.Khác

    . phải biết unit test
    => để test tự động code mình chạy ( có thư viện hỗ trợ)
    . web đẹp hay ko => phông chữ(theo thiết kế)
    . trả về client => luôn download được về(đều lấy được)
    . đợi lâu => thêm loading
    . đấu thầu => hình thức ,đã chọn trước;
        người phát biểu => phong bì
