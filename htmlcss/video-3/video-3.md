# 1.Thêm của video 2

## 1.1.

    . html5 trong table có 3 thẻ sematic: thead, tbody,tfoot
    . thead: bọc thẻ tr là tiêu đề, chỉ có 1 thead
    . tbody: bọc thẻ tr là thân bảng
    . tfoot: bọc thẻ tr là chân bảng

## 1.2.

    . sang BE => dùng bảng nhiều
    . responsive => intro qua

# 2. phần video 3

## 2.1. html form

    . form :
        . có 1 input => tự submit ko cần button
        . response: dữ liệu Server trả về
        . method:
            . get(đọc): đẩy lên url, query string
            . post(tạo, thêm mới): không đẩy lên url , form data
        . action : url mà client muốn gửi lên server để xử lý
            => khỉ gửi lên = tạo ra 1 request

        . biểu mẫu => tập hợp ô nhập liệu(trường) được nhóm trong form
        . gửi dữ liệu(submit) => trình duyệt submit các field(trường) lên Server
        . 1 website có 1 or nhiều form
        . form trong 1 trang ko đc lồng nhau

    . label : for - ip của input

    . input :
        . checked
        . required
        . type:
            . text, email, password,
            . number:
                . min , max, step
            . radio, checkbox:
                . đẩy dữ liệu lên = value

            . file: multiple(chọn nhiều file)
            . date: lỗi trên safari
            . color:
            . textarea: ko có value
        . không dùng type: number để làm nhập SĐT
            . số 0 khỉ gửi lên server sẽ mất
            . dấu + mất
        . có name để server lấy được dữ liệu: đặt name theo quy tắc underscore(user_name)
        . placeholder

    . button:
        . type: submit
            . button: dùng để xử lý bên JS
            . reset : ko nên dùng
    . put/ patch( sửa), delete

### ===> END HTML

    => Tổng hợp key chính:
        1. 1 web hoạt động như thế nào
        2. Mô hình client - server
        3. http request - http response
        4. Cấu trúc chung của html
        5. thẻ block, thẻ inline
        6. thẻ form và các thẻ trong form
        7. viết HTML chuẩn semantic

## 2.2 CSS:

    . ngôn ngữ định dạng web ( trang trí , bố cục)
    . integration : internal, external , inline
    . comment
    . selector {
        property: value;
    }

    . selector
        => học về class , id => độ ưu tiên
        . chữ thường, danh từ
        . không bắt đầu = số
        . gạch ngang
        . gạch dưới( chỉ dùng gạch dưới khi dùng BEM)
    . cách CSS:
        . dấu cách
        . >
        . viết liền
        . đứng sau cùng cấp: ~
        . nhóm: ,
    .intro BEM

### 2.2.1.

### 2.2.2.
