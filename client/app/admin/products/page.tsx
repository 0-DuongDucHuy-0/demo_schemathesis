import { Button } from "@/components/ui/button";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminProducts() {
    return <>
        <div className="flex justify-between items-center gap-4">
            <PageHeader>Sản phẩm</PageHeader>
            <Button asChild>
                <Link href="/admin/products/new">Thêm sản phẩm</Link>
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
                <TableHead>Tên sản phẩm</TableHead>
                <TableHead>Giá khởi điểm</TableHead>
                <TableHead>Ngày đấu giá</TableHead>
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