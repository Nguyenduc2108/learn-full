# 1. CSS flex

    1. Các thuộc tính trong flex container:
    . flex-wrap : wrap / no-wrap / wrap-reverse

    . align-item: căn chỉnh các item
    => stretch / flex-start / flex-end / center / baseline

    . align-content: căn chỉnh các hàng or cột
    =>  flex-start /  stretch / flex-end / center / space-around / space-between / space-evenly

    . gap: row column
    . row-gap
    . column-gap

    2. Các thuộc tính trong flex item:

    . flex-grow: number(0, 1,...) => lấp đầy , chiếm nốt phần còn lại

    . flex-shirk: number(1, 0, ...) => tự động co lại
    => không muốn co lại => dung flex-shirk: 0
    => muốn co lại gấp 2 lần => flex-shirk: 2
    ........

    . flex-basic: xét kích thước cho flex item (width - height):
    tự động chuyển width - height dựa theo flex-direction
        => bị chặn bởi min, max

    width, height < flex-basic < min, max

    . flex: grow shirk basic

    . order:

    . align-self: => có đẩy đủ tích chất của align-items
    bê tả cụm

    . thuộc tính start / end => ko phụ thuộc vào reverse

# 2. CSS transition

    . transition: di chuyển
    => dùng để dịch chuyển 1 thành phần html

    => nhóm thuộc tính giúp thiết lập thời gian chuyển động của thành phần html => dùng để xây dựng các hiệu ứng
    => chỉ áp dụng với các thuộc tính CSS có giá trị là số(number)
    ví dụ: opacity, padding, margin , top , left, right, bottom , width, height , ....

    . Các thuộc tính :
        1. transition-property: all | các thuộc tính
        2. transition-duration: number + unit(s,ms) => thiết lập thời gian chuyển động

        3. transition-delay: number + unit => thiết lập delay trước khi hiệu ứng chuyển động

        4.  transition-timing-function: tốc độ(kiểu) chuyển động.
        ví dụ: linear, ease, cubic-bezier() ( 0 -> 1)

        5. transition: property duration delay timing-function
