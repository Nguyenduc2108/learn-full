# 1. CSS Selector

    . +
    . ~
    . class, id , tag, ...
    . attribute Selector :
        . a[target="_blank"] => tất cả các thẻ a có target = "_blank"
        . a[target] => all tag a has target
        . a[href^="http"] => all tag a has href begin https
        . a[href*="asdf"] => all tag a has href asdf
        . ~= (cấu thành 1 từ, phải viết đầy đủ thành 1 từ)
        . $= has đuôi là ...

==> Tổng kết:
. = => có chứa
. ^= => bắt đầu bằng ...
. \*= => all có chứa ...
. ~= => phải cấu thành 1 từ
. $= => bắt đầu bằng ...
. \* => all tag
=> ứng dụng : todo list

## 1.2. Pseudo Element and Pseudo Classes (thành phần giả và lớp giả)

    . Pseudo Element: ( 2 dấu ::)
        . Cấu trúc chọn phần tử: selector::ten pham tu (dấu ::)
        . before, after: phải có content="", selector ở dạng inline
        . first-letter => chọn ký tự đầu tiên
        . first-line => chọn dòng đầu tiên
        . selector => bôi đen(chọn văn bản)
        . ::placeholder

    . Pseudo Class: ( 1 dấu :)
        . hover => dùng nhiều trên PC
        . active => dùng nhiều trên mobile; trên pc có thể active = nút cách
        . focus:
            . tabindex: chỉ định được thứ tự tab
        . checked
        . disabled
        . not
        . first-child, last-child
        . first-of-type, last-of-type

        ==> bổ sung của video 4 ( Phần video 5)
        . nth-child:
            . n(0 -> n), số => ảnh hưởng performance
            . odd, even
        . nth-of-type

# 2. Khác

    . intro CSS module :
        . tự động render ra các class,id != nhau
        . quét từ đầu đến cuối để ko 1 tag nào === id, class

==> Nguyên tắc làm FE : . chuẩn , chính xác 100%,
deadline : tính theo giờ , sai 1 lần => bỏ
