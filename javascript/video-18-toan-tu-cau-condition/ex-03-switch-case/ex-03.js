// Switch case

var action = "destroy";

switch (action) {
    case "create":
    case "add":
    case "insert":
        console.log("Create");
        break;
    case "update":
    case "edit":
        console.log("Update");
        break;
    case "delete":
    case "remove":
    case "del":
    case "destroy":
        console.log("Delete");
        break;
    default:
        console.log("Not found");
        break;
}

// bài tập
var action = "add";

if (action === "create" || action === "add" || action === "insert") {
    console.log("Create");
} else if (action === "update" || action === "edit") {
    console.log("Update");
} else if (action === "delete" || action === "remove" || action === "del" || action === "destroy") {
    console.log("Delete");
} else {
    console.log("Not found");
}

// bài tập 2
var month = "2";
var year = 2000;

if (month % 1 === 0 && month >= 1 && month <= 12 && typeof month === "number" && !isNaN(month)) {
    // code
} else {
    console.log("Tháng không hợp lệ");
}

switch (+month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Tháng ${month} có 31 ngày`);
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Tháng ${month} có 30 ngày`);

        break;

    case 2:
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            console.log(`Tháng ${month} có 29 ngày`);
        } else {
            console.log(`Tháng ${month} có 28 ngày`);
        }
        break;
    default:
        console.log(`Tháng ${month} không hợp lệ`);
        break;
}
