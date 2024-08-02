# 1. website hoạt động theo mô hình client server (100%)

    . server có 1 ip
    . domain => trỏ ip
    . Luồng: browser => DNS Server => ip address
            xong ip address trả về browser
            => browser => ip address => server data
            xong server data trả về browser
    . mạng LAN
    . socket: liên tục

## Ex 01

    . thẻ đủ , thẻ tự đóng
    . inline:
        . rộng = nội dung chứa nó
    . block:
        . nằm 1 dòng mới
        . rộng 100% so với thẻ cha gần nhất
    . thẻ block : p, div, h1 -> h6, ol, ul, li, blockquote, pre, hr
        . h1-h6 : thẻ hiển tiêu đề cần nhấn mạnh
        . p: thẻ định dạng đoạn văn
        . div: thẻ chia khu vực, chất all thẻ khác
        . ul, li: thẻ danh sách (menu, điều hướng)
        . pre: thẻ khi muốn thể hiện 1 đoạn code
        . hr: thẻ hiển thị đường line
        . Thẻ semantic: nav, header, section, article, aside, footer, main, figure,figcaption
    . thẻ inline: span, b
    . cú pháp comment : Ctrl + /
    . HTML entities: hiện đoạn code, ký tự đặc biệt (&gt; &lt;,...)
    . Lỗi bảo mật XSS:
        . hacker tấn công = JS dựa vào sơ hở trên view
