Import bidbooks.sql và bật xampp để chạy backend

Lấy hết thông tin của user (trừ tk mk)
GET http://localhost:8080/users/getAllUsers

Lấy thông tin user theo id
GET http://localhost:8080/users/getUserById/:id

Xóa user
DELETE http://localhost:8080/users/deleteUserById/:id