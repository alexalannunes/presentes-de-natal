export const getStoreActionText = (storeName: string) => {
  const name = storeName.toLowerCase();

  if (name.includes("mercado livre")) return "no Mercado Livre";
  if (name.includes("shopee")) return "na Shopee";
  if (name.includes("amazon")) return "na Amazon";

  return "na Loja";
};
