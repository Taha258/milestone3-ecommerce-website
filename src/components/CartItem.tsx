'use client'

import { useCart } from '@/contexts/CartContext'
import { Minus, Plus, Trash2 } from 'lucide-react'

type CartItemProps = {
  _id: string
  name: string
  price: number
  quantity: number
}

export default function CartItem({ _id, name, price, quantity }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)} each</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => updateQuantity(_id, quantity - 1)}
            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            onClick={() => updateQuantity(_id, quantity + 1)}
            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={() => removeFromCart(_id)}
          className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

