// import { createClient } from 'next-sanity'
import { client } from './client'



export async function getProducts() {
    try {
      const products = await client.fetch(`*[_type == "product"]{
        _id,
        name,
        "slug": slug.current,
        price,
        "imageUrl": image.asset->url
      }`)
      console.log('Fetched products:', products)
      return products
    } catch (error) {
      console.error('Error fetching products:', error)
      return []
    }
  }
  
  export async function getProduct(slug: string) {
    try {
      const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        price,
        "imageUrl": image.asset->url,
        description
      }`, { slug })
      console.log('Fetched product:', product)
      return product
    } catch (error) {
      console.error('Error fetching product:', error)
      return null
    }
  }
  