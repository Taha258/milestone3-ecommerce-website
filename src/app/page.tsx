import { getProducts } from '@/sanity/lib/sanity'
import ProductCard from '@/components/ProductCard'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DiscountSection from '@/components/DiscountSection'

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
}



export default async function Home() {
  const products:Product[] = await getProducts()
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero/>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        {products.length === 0 ? (
          <p className="text-xl text-gray-500">No products found.</p>
        ) : (
          <>
            <p className="text-lg text-gray-600 mb-6">Showing {products.length} products</p>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </div>
          </>
        )}
        <DiscountSection/>
      </main>
    </div>
  )
}

