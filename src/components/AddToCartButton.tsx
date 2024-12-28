'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

type Product = {
  _id: string
  name: string
  price: number
  imageUrl: string
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = async () => {
    setIsAdding(true)
    addToCart(product)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsAdding(false)
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
    </button>
  )
}

