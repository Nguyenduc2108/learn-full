# 1. CSS background

// https://picsum.photos/id/1/200/300
. background-color: thay đổi màu nền , hình nền

    . background-image: thiết lập ảnh nền
    . background-repeat: repeat, no-repeat, repeat-x, repeat-y

    . background-position:thiết lập vị trí của ảnh nền(mặc định left top)
        . css sprite (1 ảnh lớn có nhiều icon => dùng bg-position để cắt)

    . background-size: tùy chỉnh kích thước ảnh nền

    . nên dùng background-color với background-image

    . background-attachment: scroll / fixed
    => thiết lập cố định background khi kéo thanh cuốn

    . background: color image position / size repeat attachment

# 2. CSS border

    . border-width
    . border-style: solid , dashed, dotted, double
    . border-color
    . border
    . border-left, border-right, border-bottom, border-top
    . border-left-width, border-right-width, border-bottom-width, border-top-width
    . border-left-style, border-right-style, border-bottom-style, border-top-style
    . border-left-color, border-right-color, border-bottom-color, border-top-color

# 3. CSS Width Height

    . đơn vị % => dựa vào thẻ cha
    . vw -> viewport width
    . vh -> viewport height
    . viewport => phần khung nhìn thấy trên website

    . width
        . max-width
        . min-width

    . height
        . max-height
        . min-height

    . opacity
    . filter: grayscale(100%) (đen trắng)

## 3.1. Case

    . cơ chế inline-replace
    => tự động chuyển thành inline-block
    . iframe, img , video, embed,...

# khác

    . nghiệp vụ là client
    server là tự bắn lên
