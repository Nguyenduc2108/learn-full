# SCSS => ngôn ngữ tiền sử lý CSS

## 1. cách chạy riêng file scss

    sass ten_thu_muc_chua_file_scss/file.scss css/file.css (or assets/css/file.css)

## 2. Nén file

## 3. cú pháp lồng

    & : loại bỏ dấu cách
    => &:hover, &::before, &::after, &.class, &#id, ...

## 4. sửa nhầm file css => tắt file đi bật lại

## 5. Câu điều kiện

-   thực thi 1 đoạn code dựa vào điều kiện

```SCSS
    @if dieukien {
        // chạy khi điều kiện đúng
    } @else {
        // chạy khi điều kiện sai
    }

```

### 5.1 Các toán tử so sánh

    1. ==  : bằng
    2. >   : lớn hơn
    3. >=  : lớn hơn hoặc bằng
    4. <   : nhỏ hơn
    5. <=  : nhỏ hơn hoặc bằng
    6. !=  : khác

### 5.2 Các toán tử kết hợp

    1. and : và
    2. or  : hoặc
    3. not : phủ định

### 5.3 Các toán tử số học

```
    +
    -
    *
    /
    %  -> chia lấy dư
```

### 5.4 Giá trị đúng sai (Boolean)

```
    true  => đúng
    false => sai
```

## 5. extend and Placeholder

    1. extend .class
    2. extend %Placeholder

## 6. mixin

    1. hỗ trợ cú pháp lồng
    2. có đối số
