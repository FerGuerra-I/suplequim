// components/ui/product-card.tsx
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "./button"

interface ProductCardProps {
  name: string
  price: number
  rating: number
  reviews: number
  imageUrl: string
  href: string
}

export function ProductCard({ name, price, rating, reviews, imageUrl, href }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={href} className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </Link>
      
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-current" : "fill-transparent"}`}
            />
          ))}
          <span className="ml-1 text-xs text-gray-500">({reviews})</span>
        </div>
        
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900 flex-1">
          <Link href={href}>{name}</Link>
        </h3>
        
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">
            S/ {price.toFixed(2)}
          </p>
          <Button size="sm">Añadir</Button>
        </div>
      </div>
    </div>
  )
}