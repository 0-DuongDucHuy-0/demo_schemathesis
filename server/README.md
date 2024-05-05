Làm api nào thì ghi link api ở đây nhá

Đăng nhập
GET http://localhost:8080/users/login/:username/:password 

Tạo acc
GET http://localhost:8080/users/signup/:username/:password

Cập nhật thông tin cá nhân
GET http://localhost:8080/users/updateUserInfo/:fullname/:address/:email/:phoneNumber/:username

Lấy hết thông tin của user (trừ tk mk)
GET http://localhost:8080/users/getAllUsers

Lấy thông tin user theo id
GET http://localhost:8080/users/getUserById/:id

Xóa user
GET http://localhost:8080/users/deleteUserById/:id

Lấy hết đấu giá
GET http://localhost:8080/auctions/

Lấy theo id
GET http://localhost:8080/auctions/:id

Tạo đấu giá
POST http://localhost:8080/auctions/