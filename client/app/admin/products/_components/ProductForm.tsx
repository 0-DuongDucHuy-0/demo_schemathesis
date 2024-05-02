"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { formatCurrency } from "@/lib/format"
import { useState } from "react"

export function ProductForm() {
  const [price, setPrice] = useState<number>()
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Tên</Label>
        <Input type="text" id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="price">Giá</Label>
        <Input type="number" id="price" name="price" required value={price} onChange={e => setPrice(Number(e.target.value) || undefined)} />
        <div className="text-muted-foreground">
          {formatCurrency((price || 0))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Mô tả</Label>
        <Textarea id="description" name="description" required/>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Ảnh</Label>
        <Input type="file" id="image" name="image" required />
      </div>

      <Button type="submit">Thêm sản phẩm</Button>
    </form>
  )
}