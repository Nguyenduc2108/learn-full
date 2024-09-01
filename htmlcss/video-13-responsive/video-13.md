# Responsive Web Design

# Adaptive

=> chỉ dùng chung cơ sở dữ liệu

## Breakpoint (điểm thay đổi của giao điện)

1400
1200
992
768
576

## Lưu ý:

        - không có breakpoint cố định chuẩn trong tất cả các dự án
        - phụ thuộc vào cấu trúc dự án
        - Tip: dựa vào các breakpoint phổ biến trên các CSS Framework => phát triển thêm

## Các trường phái (cách) Responsive

    1. Desktop first (code từ giao diện lớn nhất)

    2. Mobile first (code từ giao diện bé nhất) -> nên dùng (code ít hơn)

## Media Query

    1. Dựa vào breakpoint để viết
    2. Dựa vào cách Responsive

## Desktop First

    - chặn đầu chặn đuôi bị lỗi ko ăn đúng màn hình (0.98)

```CSS
@media (max-width: 1399px) {

}

@media (max-width: 1199px) {

}

@media (max-width: 991px) {

}

@media (max-width: 767px) {

}

@media (max-width: 575px) {

}
```

==> phải viết đúng thứ tự media query

## Mobile First

```CSS
@media (max-width: 575px) {

}

@media (min-width: 768px) {

}
@media (min-width: 992px) {

}
@media (min-width: 1200px) {

}
@media (min-width: 1400px) {

}
```

=> Meta viewport
