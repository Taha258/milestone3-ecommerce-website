import { getProduct } from '@/sanity/lib/sanity'
import Image from 'next/image'
import AddToCartButton from '@/components/AddToCartButton'
import Header from '@/components/Header'

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-gray-900">Product not found</h1>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center">
          {/* Product Image */}
          <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-xl bg-gray-200 shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={640}
              height={640}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Product Details */}
          <div className="mt-10 sm:mt-16 lg:mt-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            {/* Product Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
