import { Button } from "@/components/ui/button";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminUsers() {
    return <>
        <div className="flex justify-between items-center gap-4">
            <PageHeader>Người dùng</PageHeader>
            <Button asChild>
                <Link href="/admin/users/new">Thêm người dùng</Link>
            </Button>
        </div>
        <ProductsTable />
    </>
}

function ProductsTable() {
    return <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-0">
                    <span className="sr-only">Làm gì đó</span>
                </TableHead>
                <TableHead>Họ và tên</TableHead>
                <TableHead>Số điện thoại</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="w-0">
                    <span className="sr-only">Hành động</span>
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            
        </TableBody>
    </Table>
}