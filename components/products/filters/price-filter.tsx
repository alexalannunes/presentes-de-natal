// components/products/filters/price-filter.tsx
"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DollarSign } from "lucide-react";
// import { gaEvent } from "@/components/analytics/ga-events";
import { FilterTriggerMobile } from "./filter-trigger-mobile";
import { PriceRadioList } from "./price-radio-list"; // NOVO COMPONENTE

const priceRanges = [
  { label: "Qualquer Preço", value: "todos" },
  { label: "Até R$ 100", value: "0-100" },
  { label: "R$ 100 - R$ 300", value: "100-300" },
  { label: "R$ 300 - R$ 700", value: "300-700" },
  { label: "Acima de R$ 700", value: "700-2000" },
];

// Lógica de manipulação da URL
const handleFilterChange = (
  value: string,
  searchParams: URLSearchParams,
  pathname: string,
  replace: (url: string) => void
) => {
  const params = new URLSearchParams(searchParams);
  const newValue = value === "todos" ? "" : value;

  if (newValue) {
    params.set("preco", newValue);
    // gaEvent("filter_applied", { filter_type: "price", value: newValue });
  } else {
    params.delete("preco");
  }
  replace(`${pathname}?${params.toString()}`);
};

export function PriceFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentPriceRangeValue = searchParams.get("preco") || "todos";

  // Calcula o texto de exibição para a barra móvel/desktop
  const currentPriceLabel =
    priceRanges.find((r) => r.value === currentPriceRangeValue)?.label ||
    "Preço";

  // Desktop: Select simples (mantido para Sidebar)
  const desktopSelect = (
    <div className="space-y-2">
      <label className="text-sm font-medium flex items-center gap-2">
        <DollarSign className="h-4 w-4 text-primary" />
        Faixa de Preço
      </label>
      <Select
        onValueChange={(value) =>
          handleFilterChange(value, searchParams, pathname, replace)
        }
        value={currentPriceRangeValue}
        defaultValue="todos"
      >
        <SelectTrigger className="rounded-lg shadow-sm w-full">
          <SelectValue placeholder="Selecione a faixa de preço" />
        </SelectTrigger>
        <SelectContent>
          {priceRanges.map((range) => (
            <SelectItem key={range.value} value={range.value}>
              {range.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  // Mobile: Trigger que abre o Vaul Drawer
  const mobileTrigger = (
    <FilterTriggerMobile
      label="Preço"
      icon={<DollarSign className="h-4 w-4" />}
      // Exibe a label, exceto se for "Qualquer Preço"
      currentValueDisplay={
        currentPriceRangeValue !== "todos" ? currentPriceLabel : ""
      }
    >
      {/* Conteúdo da Gaveta (Vaul) é a nova Lista de Rádio/Checkbox */}
      <PriceRadioList />
    </FilterTriggerMobile>
  );

  return (
    <>
      <div className="hidden md:block">{desktopSelect}</div>
      <div className="md:hidden">{mobileTrigger}</div>
    </>
  );
}
