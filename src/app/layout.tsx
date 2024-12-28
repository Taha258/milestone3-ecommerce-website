import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/contexts/CartContext'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StyleHub',
  description: 'Your one-stop shop for trendy styles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
        <Footer/>
      </body>
    </html>
  )
}

