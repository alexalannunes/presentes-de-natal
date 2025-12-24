// components/products/ProductCard.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
// Importa o novo slider
import { ImageSlider } from "./image-slider";
import { gaEvent } from "@/lib/ga-event";

// Importa o Product Type de um arquivo centralizado (lib/products.ts)
// Se não existir, você deve usar a interface Product localmente ou criá-lo.
// Importando localmente aqui para garantir que o card funcione:
interface Product {
  name: string;
  description: string;
  price: number;
  store: string;
  affiliate_url: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

export function ProductCard({ product }: ProductCardProps) {
  // Handler para rastrear o clique no afiliado
  const handleAffiliateClick = () => {
    // GA: user clicked product card
    if (typeof window !== "undefined" && window.gtag) {
      gaEvent("product_click", {
        product_name: product.name,
        price: product.price,
        store: product.store,
        event_category: "Affiliate",
      });
    }
  };

  return (
    <Card
      // Aplica a sombra suave e transição de hover
      // O grupo é essencial para mostrar os botões de navegação no hover do slider
      className="rounded-xl overflow-hidden shadow-gift pt-0 hover:shadow-gift-hover transition-all duration-300 group"
    >
      <div className="p-0 border-b border-border/50">
        {/* Substitui a imagem estática pelo Slider */}
        <ImageSlider images={product.images} name={product.name} />
      </div>

      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-bold line-clamp-2 min-h-[50px] mb-1">
          {product.name}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-sm min-h-[60px]">
          {product.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex flex-col justify-between items-center p-4 pb-0 gap-3 pt-0 border-t border-border/50">
        <div className="flex items-center justify-between w-full">
          <span className="text-xl font-extrabold text-primary">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-muted-foreground capitalize">
            {product.store}
          </span>
        </div>

        {/* Botão de Saída (Link de Afiliado) */}
        <Link
          href={product.affiliate_url}
          target="_blank"
          onClick={handleAffiliateClick}
          className="w-full"
        >
          <Button className="rounded-full w-full shadow-md hover:shadow-lg transition-shadow">
            Comprar Agora
            <ShoppingBag className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
