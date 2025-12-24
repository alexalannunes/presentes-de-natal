// components/products/filters/price-radio-list.tsx
"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { gaEvent } from "@/lib/ga-event";

const priceRanges = [
  { label: "Qualquer Preço", value: "todos" },
  { label: "Até R$ 100", value: "0-100" },
  { label: "R$ 100 - R$ 300", value: "100-300" },
  { label: "R$ 300 - R$ 700", value: "300-700" },
  { label: "Acima de R$ 700", value: "700-2000" },
];

export function PriceRadioList() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Obtém o valor atual, padrão é "todos"
  const currentPriceRangeValue = searchParams.get("preco") || "todos";

  const handleSelect = (value: string) => {
    const params = new URLSearchParams(searchParams);
    const newValue = value === "todos" ? "" : value; // Remove 'preco' se for 'todos'

    if (newValue) {
      params.set("preco", newValue);
      gaEvent("filter_applied", { filter_type: "price", value: newValue });
    } else {
      params.delete("preco");
    }
    replace(`${pathname}?${params.toString()}`);

    // NOTA: Para fechar o Drawer após a seleção,
    // o componente precisa ser fechado pelo componente pai (FilterTriggerMobile),
    // mas faremos isso em um passo posterior se necessário.
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold mb-3">Selecione a Faixa de Preço</h3>
      {priceRanges.map((range) => {
        const isSelected = range.value === currentPriceRangeValue;
        return (
          <div
            key={range.value}
            onClick={() => handleSelect(range.value)}
            className={cn(
              "flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors",
              isSelected
                ? "bg-primary/20 text-primary border-primary shadow-sm"
                : "bg-card hover:bg-muted/50 border-border"
            )}
          >
            <span className="font-medium">{range.label}</span>
            {isSelected && <DollarSign className="h-4 w-4" />}
          </div>
        );
      })}
    </div>
  );
}
