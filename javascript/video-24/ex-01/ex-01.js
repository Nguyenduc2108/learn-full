// Exercise 1
var query = {
    name: "Van Duc",
    email: "vanduc@gmail.com",
    keyword: "f8",
};

// const params = new URLSearchParams(query).toString();
// console.log(params);

var param = "";

for (var key in query) {
    var sub = `${key}=${query[key]}`;
    param += `${sub}&`;
}

param = param.slice(0, param.length - 1).replaceAll(" ", "+");
// console.log(param);

var param = Object.entries(query)
    .map((item) => item.join("="))
    .join("&")
    .replaceAll(" ", "+");
// Chaining
// console.log(param);

// Exercise 2:
//yêu cầu: tách từng thành phần của URL
/**
 * - Protocol: https
 * - Domain: fullstack.edu.vn
 * - Path: search
 * - Query: {
 * name: hoang an,
 * email: hoangan@gamil.com,
 * keyword: f8
 * }
 */

var url = `https://fullstack.edu.vn/search?name=Hoang+An&email=hoangan@gmail.com&keyword=f8`;
console.log(url);

var urlArr = url.split("//");
var protocol = urlArr[0].slice(0, -1);

var rest = urlArr[1];
var domain = rest.slice(0, rest.indexOf("/"));
var afterDomain = rest.slice(rest.indexOf("/"));

var pathname = afterDomain.slice(0, afterDomain.indexOf("?"));

var params = afterDomain.slice(afterDomain.indexOf("?") + 1);

var query = params.split("&").map((item) => {
    var itemArr = item.replaceAll("+", " ").split("=");
    return itemArr;
});

query = Object.fromEntries(query);
console.log(protocol, domain, pathname);
console.log(query);
