Import bidbooks.sql và bật xampp để chạy backend

Làm api nào thì ghi link api ở đây nhá

Đăng nhập
POST http://localhost:8080/users/login

Tạo acc
POST http://localhost:8080/users/signup
req.body = [username, password]

Cập nhật thông tin cá nhân
PUT http://localhost:8080/users/updateUserInfo/:id
req.body = [fullname, address, email, phone_number]

Lấy hết thông tin của user (trừ tk mk)
GET http://localhost:8080/users/getAllUsers

Lấy thông tin user theo id
GET http://localhost:8080/users/getUserById/:id

Xóa user
DELETE http://localhost:8080/users/deleteUserById/:id

Lấy hết đấu giá
GET http://localhost:8080/auctions

Lấy theo id
GET http://localhost:8080/auctions/:id

Tạo đấu giá
POST http://localhost:8080/auctions
req.body = [book_id, start_time, end_time, status, start_price, step]

Cập nhật đấu giá theo id
PUT http://localhost:8080/auctions/:id
req.body = [book_id, start_time, end_time, status, start_price, step]

Xóa Đấu giá
DELETE http://localhost:8080/auctions/:id