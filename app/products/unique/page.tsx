// app/products/page.tsx (FINAL)
import { Container } from "@/components/layout/container";
import { ExploreProductsButton } from "@/components/products/explore-products-button";
import { ProductList } from "@/components/products/product-list";
import productsData from "@/data/products.json";
import { Product } from "@/lib/products";
import { Suspense } from "react";

interface ProductsPageProps {
  searchParams: Promise<{
    p?: string;
  }>;
}

export const revalidate = 3600; // 1h

export const metadata = {
  title: "Catálogo Completo | Presentes para Homens",
  description:
    "Filtre por preço e loja e encontre o presente perfeito de Natal em segundos.",
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const allProducts: Product[] = productsData as Product[];
  const search = await searchParams;
  // p = affiliate_url separated by commas
  const p = search.p?.split(",").filter(Boolean) || [];
  const filteredProducts = [...allProducts]
    .filter((product) => p.includes(product.affiliate_url))
    .sort((a, b) => a.price - b.price);

  return (
    <Container className="pb-12">
      {/* 1. HEADER (Visível apenas em Desktop/Tablet) */}
      <header className="hidden md:block pt-4 pb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Presentes para Ele ({filteredProducts.length} itens) 🎁
        </h1>
      </header>

      {/* 2. LAYOUT PRINCIPAL (Filtro + Listagem) */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* 2.2. COLUNA DE LISTAGEM */}
        <div className="flex-grow pt-2 mt-10 md:mt-0">
          {/* Título aqui apenas para mobile/tablet (opcional, mas mantido por clareza) */}
          <h1 className="text-2xl font-bold tracking-tight mb-6 md:hidden">
            Presentes ({filteredProducts.length})
          </h1>

          <Suspense fallback={<div>Carregando catálogo...</div>}>
            <ProductList products={filteredProducts} />
          </Suspense>
        </div>
      </div>

      <ExploreProductsButton />
    </Container>
  );
}
