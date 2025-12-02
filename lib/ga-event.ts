/* eslint-disable @typescript-eslint/no-explicit-any */
// components/analytics/ga-events.ts

/**
 * Envia um evento personalizado para o Google Analytics (gtag).
 * Deve ser chamado apenas no lado do cliente (use client).
 * @param name Nome do evento (ex: 'product_click', 'filter_applied').
 * @param params Parâmetros do evento (ex: { product_id: '...', price_range: '...' }).
 */
export const gaEvent = (name: string, params: Record<string, any> = {}) => {
  // Verifica se o gtag existe (após a inicialização no layout.tsx)
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", name, params);
  }
};
