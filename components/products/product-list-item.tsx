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

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "ProductClick", {
        product_name: product.name,
        price: product.price,
        store: product.store,
      });
      window.fbq("track", "InitiateCheckout", {
        content_name: product.name,
        value: product.price,
        currency: "BRL",
      });
    }
  };

  return (
    <Card
      className={cn(
        "flex flex-col rounded-xl overflow-hidden shadow-gift hover:shadow-gift-hover transition-all duration-300",
        // Largura controlada para não ficar gigante no mobile
        "max-w-[280px] mx-auto h-full border border-border/50"
      )}
    >
      {/* 1. SEÇÃO DA IMAGEM (Topo) */}
      <div className="w-full aspect-square flex-shrink-0 overflow-hidden bg-muted/20">
        <ImageSlider images={product.images} name={product.name} />
      </div>

      {/* 2. CONTEÚDO (Detalhes) */}
      <div className="flex flex-col p-3 flex-grow">
        {/* Loja e Preço no topo para leitura rápida */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground capitalize font-medium">
              {product.store}
            </span>
            <span className="text-lg font-extrabold text-primary leading-tight">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        {/* Título - Mantemos o line-clamp para não quebrar o layout */}
        <h3 className="text-sm font-semibold line-clamp-2 mb-1 leading-snug h-[40px]">
          {product.name}
        </h3>

        {/* Descrição - Opcional em cards verticais pequenos, mas mantida com fonte menor */}
        <p className="text-[11px] text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* 3. BOTÃO DE AÇÃO (Sempre na base) */}
        <div className="mt-auto pt-2">
          <Link
            href={product.affiliate_url}
            target="_blank"
            onClick={handleAffiliateClick}
            className="w-full"
          >
            <Button
              size="sm"
              className="rounded-full w-full shadow-md hover:shadow-lg transition-shadow text-xs h-9"
            >
              Comprar Agora
              <ShoppingBag className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
