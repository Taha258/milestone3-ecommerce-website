'use client'

import Header from '@/components/Header'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-xl text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item._id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-4 py-5 sm:p-6 border-t">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">Total:</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

