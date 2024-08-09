# 1. CSS overflow

    . overflow : xử lý nội dung tràn ra ngoài
        . giữ nguyên (visible )
        . ẩn đi(hidden)
        . tạo thanh cuộn: (scroll, auto)

    . overflow: visible / hidden / scroll / auto

        . scroll => luôn tạo thanh cuộn

        . auto => chỉ tạo thanh cuộn khi thành phần con > thành phần cha


    . overflow-x, overflow-y ( không nên để thanh cuộn ngang)

=> Khái niệm cross browser testing
(test chéo trên nhiều hđh, trình duyệt, phiên bản !== nhau)

# 2. CSS margin - padding

    . thẻ block : 4 hướng
    . thẻ inline: 2 hướng ngang

    . padding, padding-top, padding-left, padding-bottom, padding-right

    . margin, margin-top, margin-left, margin-bottom, margin-right
        . tự động lấy thằng lớn hơn( do tình trạng tự động thu hẹp margin)
        . margin thẻ cha và margin thẻ con => thẻ cha bị thu hẹp lại
        . 1 Số ấm => cộng vào

=> Margin collapsing

    . display: inline-block
    . intro :
        , display: flex
        . position: absolute
        . position: fixed

    . padding-top: % => theo width của thẻ cha
        => làm tỷ lệ (16/9)

## 2.1 Cách căn giữa (theo chiều ngang)

    . thẻ inline => text-align: center

    . thẻ block => margin-left:auto;
                   margin-right:auto;
                or margin: 0 auto;

# 3. Reset CSS

    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline: 0; => ngoài border , thẻ nào có focus thì có outline
    }

# 4. Box Modal

    . box-sizing: content-box / border-box

    . không nên xét height

    . calc()

# 5. float

    . float : trôi các thành phần về bên trái or phải của thành phần cha

    . float: none / left / right => nên để theo 1 hướng
        => overflow: hidden / auto => có chiều cao ở thẻ cha
    . html nằm trước => trôi trước

    => tự động trôi
    => fix => clear:left (hủy tự động trôi)
                    / right(ko trôi bên phải)
                    / both(ko trôi 2 bên)
