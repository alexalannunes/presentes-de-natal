// lib/filters.ts

import { Product } from "./products"; // Importa a interface definida acima

interface FilterParams {
  q?: string;
  loja?: string;
  preco?: string;
}

export function filterProducts(
  products: Product[],
  params: FilterParams
): Product[] {
  let result = [...products];
  const { q, loja, preco } = params;

  // 1. Filtro de Busca (q)
  if (q) {
    const query = q.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }

  // 2. Filtro de Loja (loja)
  if (loja) {
    const stores = loja.split(",").map((s) => s.trim().toLowerCase());
    result = result.filter((p) => stores.includes(p.store.toLowerCase()));
  }

  // 3. Filtro de Preço (preco)
  if (preco) {
    // Espera formato "50-200"
    const parts = preco.split("-").map(Number);
    const min = parts[0] || 0;
    const max = parts[1] || Infinity;

    result = result.filter((p) => p.price >= min && p.price <= max);
  }

  return result;
}
