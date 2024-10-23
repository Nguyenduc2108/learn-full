tất cả quy về chuối (String)

## Chaining (Viết theo kiểu chuỗi) : . nối .

## prototype

    -   dùng for in => return về cả key trong prototype

### function constructor

    -   đóng gói , kế thừa

#### static method, static property

     -  trong JS chính là phương thức, thuộc tính đó : không bị phụ thuộc bởi đối tượng

## 1.1 this : ở phương thúc tĩnh => nội dung của hàm tạo

## 1.2 this : bình thường => Object

=> 1 hàm tạo muốn truy cập vào phương thuộc tình thì phải truy cập qua đối tượng => muốn chuyển 1 hàm tạo thành đối tượng => dùng từ khóa new Hamtao()

=> muốn truy cập static đến non-static => dùng new this()

-   cơ chế thông báo lỗi:
    throw new Error()

#### 2.1 Kiểm tra 1 object được tạo từ hàm tạo nào:

    - Cách 1: object.constructor.name

    - Cách 2: instanceof

#### 2.2 Cách kiểm tra có phải 1 Object hay không:

    - Cách 1:  object.constructor.name === "Object"

    - Cách 2:  typeof object === "object" && object !== null && !Array.isArray(object)

    - Cách 3: Object.prototype.toString.call(object) === "[object Object]"

-   Object.create()
-   tham chiếu
-   Phân biệt: constructor, object, instance
