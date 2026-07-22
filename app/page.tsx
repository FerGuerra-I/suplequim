import { siteConfig } from "@/config/site"
import { ProductCard } from "@/components/ui/product-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            {siteConfig.description}
          </p>
        </div>

        {/* Sección de Catálogo / Muestra de Productos */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos Destacados</h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {siteConfig.sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                imageUrl={product.imageUrl}
                href={product.href}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
