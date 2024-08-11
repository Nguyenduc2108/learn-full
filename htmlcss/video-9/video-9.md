# 1. List item (continue)

    . có thể chuyển thẻ <div> thành dàng list

    . Có 2 cách CSS để xếp hạng danh sách các bài hát
    (đánh số thứ tự):

        1. Chuyển thẻ h2 => dạng list-item

        2. Muốn đẹp hơn => dùng counter
            . counter-reset: tên bộ đếm(biến đếm = 0)
            . counter-increment: tên bộ đếm
            . counter(tên bộ đếm)

==> Nguyên tắc đếm:

1. Phải có bộ đếm(quy định bộ đếm, khi nao bắt đầu)
   do trong web có rất nhiều section cần đếm
   => phải khởi tạo bộ đếm (tên gì, ở đâu)
   => khởi tạo ở thẻ cha bọc của nó
   chạy (tên gì? ở đâu)
   hiển thị

# 2. Font icons

    . Cách tích hợp
        . icon là text => dùng thuộc tính của text để css
        . tên icon : angle, arrow, home, bag,...

        1. Cách 1 : lên font we some chọn html

        2. cách 2 :
            . lên font we some copy mã code + \
            . tìm font-family trong file min

=> check thanh toán tự động :
=> tạo chatbot để nó check

# 3. Custom radio - checkbox

    . cursor:
    . user-select

# 4. Flex box

    . Flex CSS: Flex box module
    => 1 kĩ thuật chia layout trong CSS

-   Có 2 thành phần :
    . flex Container -> thẻ bọc
    => Các thuộc tính trong nhóm flex container:

    . justify-content: flex-start / flex-end / center / space-between / space-evenly / space-around

    . flex-direction: row / row-reverse / column / column-reverse

    . flex Item -> thẻ con

    . display: flex / inline-flex
