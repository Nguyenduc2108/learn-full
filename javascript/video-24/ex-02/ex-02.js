Object.prototype.combineValues = function () {
    return Object.values(this);
};

var user = {
    name: "Van Duc",
    company: "F8",
};

var customer = {
    name: "Van Duc 2",
    company: "F8",
    age: 23,
};

// Exercise 1: Viết phương thức prototype có tác dụng nối tất cả các giá trị các value trong object thành 1 mảng

console.log(customer.combineValues());

function demo() {
    console.log(arguments);
}
demo(1, 2, 3);
