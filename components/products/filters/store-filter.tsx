// components/products/filters/store-filter.tsx (AJUSTADO PARA DESKTOP)
"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ShoppingBasket, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"; // Re-importando Checkbox para desktop
import { cn } from "@/lib/utils";
import { FilterTriggerMobile } from "./filter-trigger-mobile";

interface StoreFilterProps {
  availableStores: string[];
}

// Lógica de manipulação da URL (mantida)
const handleCheckChange = (
  store: string,
  isChecked: boolean,
  currentStores: string[],
  searchParams: URLSearchParams,
  pathname: string,
  replace: (url: string) => void
) => {
  let newStores: string[];
  const lowerStore = store.toLowerCase();

  if (isChecked) {
    newStores = [...currentStores, lowerStore];
  } else {
    newStores = currentStores.filter((s) => s !== lowerStore);
  }

  const params = new URLSearchParams(searchParams);
  const uniqueStores = Array.from(new Set(newStores)).join(",");

  if (uniqueStores) {
    params.set("loja", uniqueStores);
  } else {
    params.delete("loja");
  }

  replace(`${pathname}?${params.toString()}`);
};

export function StoreFilter({ availableStores }: StoreFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentStores = searchParams.get("loja")
    ? searchParams
        .get("loja")!
        .split(",")
        .map((s) => s.trim().toLowerCase())
    : [];

  // --- CONTEÚDO 1: DESKTOP (CHECKBOXES TRADICIONAIS) ---
  const desktopContent = (
    <div className="space-y-3">
      <label className="text-sm font-medium flex items-center gap-2 mb-2">
        <ShoppingBasket className="h-4 w-4 text-primary" />
        Lojas
      </label>
      <div className="space-y-3">
        {availableStores.map((store) => {
          const storeKey = store.toLowerCase();
          const isChecked = currentStores.includes(storeKey);

          return (
            <div key={storeKey} className="flex items-center space-x-2">
              {/* Checkbox padrão para desktop */}
              <Checkbox
                id={`desktop-${storeKey}`}
                checked={isChecked}
                onCheckedChange={(checked) =>
                  handleCheckChange(
                    store,
                    checked === true,
                    currentStores,
                    searchParams,
                    pathname,
                    replace
                  )
                }
                className="rounded-md size-5"
              />
              <label
                htmlFor={`desktop-${storeKey}`}
                className="text-sm font-medium leading-none capitalize cursor-pointer"
              >
                {store}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );

  // --- CONTEÚDO 2: MOBILE (BOTÕES CLICÁVEIS DENTRO DO VAUL) ---
  const mobileContent = (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-3">Selecione as Lojas</h3>
      <div className="space-y-3">
        {availableStores.map((store) => {
          const storeKey = store.toLowerCase();
          const isChecked = currentStores.includes(storeKey);

          return (
            <div
              key={storeKey}
              onClick={() =>
                handleCheckChange(
                  store,
                  !isChecked,
                  currentStores,
                  searchParams,
                  pathname,
                  replace
                )
              }
              className={cn(
                "flex items-center border justify-between p-3 rounded-lg cursor-pointer transition-colors",
                isChecked
                  ? "bg-primary/20 text-primary border-primary shadow-sm"
                  : "bg-card hover:bg-muted/50 border-border"
              )}
            >
              <label className="text-sm font-medium leading-none capitalize cursor-pointer">
                {store}
              </label>
              {isChecked && <Check className="h-4 w-4" />}
            </div>
          );
        })}
      </div>
    </div>
  );

  // Texto de exibição para a barra móvel/desktop
  const currentStoreDisplay =
    currentStores.length > 0
      ? currentStores
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(", ")
      : "";

  const mobileTrigger = (
    <FilterTriggerMobile
      label="Lojas"
      icon={<ShoppingBasket className="h-4 w-4" />}
      currentValueDisplay={currentStoreDisplay}
    >
      {/* Conteúdo da Gaveta (Vaul) é o novo mobileContent */}
      {mobileContent}
    </FilterTriggerMobile>
  );

  return (
    <>
      {/* DESKTOP (Bloco Lateral) */}
      <div className="hidden md:block">{desktopContent}</div>
      {/* MOBILE (Barra Superior com Trigger) */}
      <div className="md:hidden">{mobileTrigger}</div>
    </>
  );
}
