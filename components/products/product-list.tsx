// components/products/ProductList.tsx (REFATORADO)

import { generateSlug } from "@/lib/slug";
import { ProductCard } from "./product-card"; // Card Grande (Desktop/Tablet)
import { ProductListItem } from "./product-list-item"; // Card Pequeno (Mobile)

interface Product {
  name: string;
  description: string;
  price: number;
  store: string;
  affiliate_url: string;
  images: string[];
}

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-dashed border-border rounded-xl bg-muted/50">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Nenhum presente encontrado 🎁
        </h2>
        <p className="text-muted-foreground">
          Tente ajustar os filtros ou pesquisar por termos diferentes.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* 1. LAYOUT MOBILE (max-width: 640px) */}
      <div className="sm:hidden grid grid-cols-2 gap-2 space-y-4">
        {products.map((product) => (
          <ProductListItem key={generateSlug(product.name)} product={product} />
        ))}
      </div>

      {/* 2. LAYOUT DESKTOP/TABLET (min-width: 640px) */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={generateSlug(product.name)} product={product} />
        ))}
      </div>
    </>
  );
}
