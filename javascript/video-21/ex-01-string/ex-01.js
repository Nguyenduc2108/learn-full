// var address = "1234 Elm St";
// console.log(address.search("Elm"));

// var fullname = "John Doe";
// console.log(fullname.split(" "));

// console.log(fullname.toUpperCase());
// console.log(fullname.toLowerCase());

// var content = "Xin chào, 0111222333  0123456789 số điện thoại của tôi";
// var phone = content.match(/0\d{9}/g);
// console.log(phone);

// Exercise 1
var email = "nguyenduc.web@gmail.com";
var position = email.indexOf("@");
// var fullname = email.slice(0, email.indexOf("@"));
var fullname = email.slice(0, position);
// console.log(fullname);

// Exercise 2
var fullname = "Nguyen Duc Thanh";
var nameUpperCase = fullname.toUpperCase();
var isUpperCase = fullname === nameUpperCase;
// console.log(isUpperCase);

//Exercise 3
var str = "Xin chao, I am a developer beginner";
var firstSpace = str.indexOf(" ");
var firstWord = str.slice(0, firstSpace);

var lastSpace = str.lastIndexOf(" ");
var lastWord = str.slice(lastSpace + 1);

var middleString = str.slice(firstSpace + 1, lastSpace);

var result = `${lastWord} ${middleString} ${firstWord}`;
// console.log(result);

// Exercise 4
var keyword = "lorem";
var count = 0;

var strSearch = `<p>Tìm kiếm với từ khóa <b>${keyword}</b></p>`;

var content = `VVA lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
`;

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var result = "";

while (position !== -1) {
    result +=
        content.slice(0, position) +
        `<span class="highlight">${content.slice(position, position + keyword.length)}</span>`;
    content = content.slice(position + keyword.length);
    position = content.toLowerCase().indexOf(keyword.toLowerCase());
    count++;
}

result += content;
var bottom = `<p>Đã tìm thấy <b>${count}</b> kết quả với từ khóa <b>${keyword}</b></p>`;

document.write(`${strSearch} ${result} ${bottom}`);
