import { AdminNavbar, NavLink } from '@/components/AdminNavbar';
import React from 'react'

const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
        <AdminNavbar>
            <NavLink href="/admin">Trang chủ</NavLink>
            <NavLink href="/admin/products">Sản phẩm đấu giá</NavLink>
            <NavLink href="/admin/users">Người dùng</NavLink>
        </AdminNavbar>
        <div className='container my-6'>{children}</div>
        </>
    )
}

export default AdminLayout