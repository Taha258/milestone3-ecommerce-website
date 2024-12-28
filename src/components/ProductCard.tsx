import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
 
  name: string
  slug: string
  price: number
  imageUrl: string
}

export default function ProductCard({ name, slug, price, imageUrl }: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`} className="group block p-4 border border-gray-200 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:bg-gray-50">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 transition-all group-hover:scale-105">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-gray-900">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${price.toFixed(2)}</p>
    </Link>
  )
}
