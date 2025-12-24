// components/products/product-list-item.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import { ImageSlider } from "./image-slider";
import { cn } from "@/lib/utils";
import { gaEvent } from "@/lib/ga-event";

// Definindo o tipo Product localmente (ou importando de @/lib/products)
interface Product {
  name: string;
  description: string;
  price: number;
  store: string;
  affiliate_url: string;
  images: string[];
}

interface ProductListItemProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

export function ProductListItem({ product }: ProductListItemProps) {
  const handleAffiliateClick = () => {
    // Rastreamento GA (mantido nos comentários)
    gaEvent("product_click", {
      product_name: product.name,
      price: product.price,
      store: product.store,
      event_category: "Affiliate",
    });
  };

  return (
    <Card
      // Layout Horizontal, Sombras Suaves e Bordas Arredondadas
      className={cn(
        "flex flex-col rounded-xl gap-2 overflow-hidden shadow-gift hover:shadow-gift-hover transition-all duration-300 py-2",
        // No mobile, define a largura máxima e centraliza
        "max-w-md mx-auto"
      )}
    >
      {/* 1. SEÇÃO PRINCIPAL (HORIZONTAL: Imagem + Detalhes) */}
      <div className="flex flex-row py-0 p-3 pb-0 flex-grow">
        {/* 1.1. Imagem na Esquerda */}
        <div className="w-[100px] h-[100px] flex-shrink-0 rounded-lg overflow-hidden border border-border">
          <ImageSlider images={product.images} name={product.name} />
        </div>

        {/* 1.2. Detalhes (à direita) */}
        <div className="flex flex-col justify-start pl-3 flex-grow">
          {/* Título e Descrição */}
          <h3 className="text-base font-semibold line-clamp-2 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          {/* Preço e Loja (abaixo da descrição) */}
          <div className="mt-1">
            <span className="text-xl font-extrabold text-primary block leading-none">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-muted-foreground capitalize">
              {product.store}
            </span>
          </div>
        </div>
      </div>

      {/* 2. SEÇÃO DE AÇÃO (BOTTOM: Botão Full Width) */}
      <div className="p-2">
        <Link
          href={product.affiliate_url}
          target="_blank"
          onClick={handleAffiliateClick}
          className="w-full"
        >
          <Button
            size="sm"
            className="rounded-full w-full shadow-md hover:shadow-lg transition-shadow"
          >
            Comprar Agora
            <ShoppingBag className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
