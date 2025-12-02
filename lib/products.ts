// lib/products.ts

// Define a estrutura de um produto, usada em todo o catálogo.
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  store: string;
  affiliate_url: string;
  images: string[];
}

// Função utilitária para buscar todos os produtos (lendo do JSON)
// Usamos a promessa para simular uma chamada assíncrona, mesmo que seja local.
// No App Router, o import do JSON é suficiente, mas esta função encapsula a tipagem.
import productsData from "@/data/products.json";

export async function getProducts(): Promise<Product[]> {
  return productsData as Product[];
}

// Funções para manipular preço (ex: formatação), conforme sua estrutura
const BRL_FORMATTER = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatPrice(price: number): string {
  return BRL_FORMATTER.format(price);
}
