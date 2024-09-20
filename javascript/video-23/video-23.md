## 3. Array (part 3)

### 3.1 Array methods (part 3)

#### 3.1.1 phương thức tĩnh

#### 3.1.2 phương thức non-static (phụ thuộc vào đối tượng)

    ....

#### 3.1.3 phương thức vòng lặp trong Array

    24. find():
        - duyệt qua từng phần tử của array
        - trả về phần tử đầu tiên nếu callback return true
        - nếu không tìm thấy thì trả về undefined

    => dùng để tìm kiếm.

    25. findLast():
        - duyệt qua từng phần tử của mảng
        - trả về phần tử cuối cùng nếu callback return true
        - không thấy thì trả về undefined

    26. findIndex():
        - duyệt qua từng phần tử của mảng
        - trả về index đầu tiên nếu callback return true
        - không thấy trả về -1

    27. findLastIndex()
        - duyệt qua từng phần tử của mảng
        - trả về index cuối cùng nếu callback return true
        - không thấy trả về -1

    28. reduce():
        - duyệt qua từng phần tử trong array
        - cú pháp: array.reduce(callback, initialValue)
            + trong callback: có 3 tham số
                . prevValue
                . currentValue
                . index

         - Cách hoạt động:

        TH1: có initialValue:
            - Vòng lặp sẽ chạy từ phần tử có index = 0
            - prevValue của lần chạy đầu tiên sẽ là initialValue
            - currentValue: giá trị từng phần tử của mảng

        TH2: không có initialValue:
            - Vòng lặp sẽ chạy từ phần tử có index = 1
            - prevValue của lần chạy đầu tiên sẽ là phần tử đầu tiên của mảng
            - currentValue: giá trị từng phần tử của mảng

        => prevValue của lần chạy sau là return của lần chạy trước đó

        => kết quả trả về của hàm reduce() là return cuối cùng của prevValue trong callback

    29.

    30.

#### 1. return nhiều giá trị mà cách nhau bởi dấu "," thì nó chỉ trả về giá trị cuối cùng, các giá trị trước vẫn được thực thi (Đặc tính của hàm)

#### 2. ==> khi làm việc với Array, object thì phải xác định được địa chỉ của nó. Với Array: địa chỉ là index => có index của array thì làm gì cũng được

    - Xóa => use splice()

### Kiểu dữ liệu tham chiếu

#### 3.1.4 Copy Array

    1. dùng các phương thức xử lý mảng có trả về mảng mới:
        + slice
        + concat
        + map, filter

    2. dùng spread operator (...)

=> chỉ copy được cấp đầu tiên (shallow copy)

    3. dùng JSON (học sau):
        - JSON.parse(JSON.stringify());  (deep copy)

## 4. Object (đối tượng)

    - là 1 tên gọi đại diện cho 1 thực thể nào đó

    - trong Object có 2 thứ cần quan tâm
        1. thuộc tính: (đặc điểm)
            - biến

        2. phương thức: (hành động)
            - hàm

    - Cách tạo đối tượng trong JS:
        1. object literal:
            - tạo từ hàm Object

        2. function constructor

        3. class (ES6)

    - Cấu tạo của 1 object: key: value

### 4.1 Kiểm tra 1 biến có phải Object không

    typeof tenbien === "object" && !Array.isArray(tenbien) && tenbien !== null

### 4.2 truy cập vào key của object

1. tenObject.tenKey

2. tenObject[`tenKey`]

### 4.3 thêm, sửa, xóa vào key của object

    1. thêm: tenObject.tenKeyMoi = ...

    => tình huống: Computed Property

    2. sửa: tenObject.tenKeyCanSua

    3. xóa: delete tenObject.tenKeyCanXoa

### 4.4 Lấy danh sách các key trong object và trả về 1 mảng

    Object.keys(tenObject)

### 4.5 kiểm tra 1 object có dữ liệu hay không

    Object.keys(tenObject).length === 0 => ko có dữ liệu

### 4.6 lấy danh sách các value trong object và trả về 1 mảng

    Object.values(tenObject)

### 4.7 lấy danh sách các key và value trong object và trả về mảng 2 chiều

    Object.entries(tenObject)

    => key là phần tử thứ 1, value là phần tử thứ 2

### 4.8 Chuyển mảng 2 chiều thành object

    Object.fromEntries(tenMangHaiChieu)

### 4.9 Nối object

    Object.assign() => trả về 1 object mới

    - đặc điểm: lưu vào object ban đầu

    => phải assign 2 lần nếu ko muốn object bị thay đổi

=> có thể copy object: Object.assign({}, tenObjectCanNoi, tenObjectCanCopy)

=> thường object sẽ nằm trong 1 array
