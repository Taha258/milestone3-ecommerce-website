'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function Header() {
  const { totalItems } = useCart()

  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-4" aria-label="Top">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="text-4xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
              ShopZone
            </Link>
          </div>

          {/* Cart Section */}
          <div className="ml-8 flex items-center space-x-6">
            <Link href="/cart" className="relative inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors duration-200">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
