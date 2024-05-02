"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { formatCurrency } from "@/lib/format"
import { useState } from "react"

export function UserForm() {
  const [price, setPrice] = useState<number>()
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Họ và tên</Label>
        <Input type="text" id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" name="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Số điện thoại</Label>
        <Input type="numbẻ" id="phone" name="phone" required />
      </div>

      <Button type="submit">Thêm người dùng</Button>
    </form>
  )
}