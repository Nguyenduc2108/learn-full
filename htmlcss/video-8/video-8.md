# 1. CSS display

    . thay đổi chế độ hiển thị của 1 thẻ html

    . display : block, inline, inline-block , none

    .  Các giá trị mở rộng : flex, inline-flex , grid , list-item , table, table-cell

# 2. Intro: opacity , visibility

    . visibility: visible / hidden => ko làm mất không gian(khung vẫn còn)

    . kết hợp với opacity để làm được hiệu ứng

    . intro transition: phù hợp với các giá trị là số

# 3. position

    . thay đổi vị trí các phần tử

    . position : static / relative / absolute / fixed / sticky
        absolute => nếu ko có position thì mặc định theo body

        fixed, sticky => nhận body là cha duy nhất

    . Các thuộc tính mở rộng ( chỉ hoạt động khi có position)
        . top, left
        . bottom, right
        . z-index => số âm => hạn chế sử dụng do JS ko tác động được
        . inset: top right bottom left

    . xét width, height cố định => ưu tiên top , left

    . cách căn giữa : cho left: 0 / right: 0 + margin: 0 auto;

==> Header cố định , ẩn hiện khi lên xuống => Ưu tiên dùng JS

## 3.1. list-item

    . list-style-position: inline => chuyển icon vào trong

    . list-style-type

    . list-style

    . intro: vertical-align: middle / top / baseline / bottom
    => giúp căn chỉnh theo chiều DỌC

    . line-height

==> ứng dụng : làm menu

# khác

    . display: table-cell (1 ô trong table) / table

    intro: display:flex

==> tránh làm sản phẩm chắp vá
