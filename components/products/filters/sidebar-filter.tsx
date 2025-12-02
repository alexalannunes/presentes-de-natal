// components/products/sidebar-filter.tsx (USANDO FIXED POSITION NO MOBILE)
import { PriceFilter } from "./price-filter";
import { StoreFilter } from "./store-filter";
import { SearchInput } from "./search-input";
import { Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarFilterProps {
  availableStores: string[];
}

export function SidebarFilter({ availableStores }: SidebarFilterProps) {
  return (
    <>
      {/* 1. VISUAL MOBILE: Barra de Filtro (FIXED TOP) */}
      <div
        className={cn(
          "md:hidden z-30 p-4 bg-background border-b border-border space-y-3",
          "fixed top-0 left-0 right-0 shadow" // <--- USANDO FIXED AQUI
        )}
      >
        {/* 1.1. Input de Busca sempre visível */}
        <SearchInput />

        {/* 1.2. Filtros Ativos/Trigger (Horizontal Scroll) */}
        <div className="flex space-x-2 overflow-x-auto pb-1">
          <PriceFilter />
          <StoreFilter availableStores={availableStores} />
        </div>
      </div>

      {/* 2. VISUAL DESKTOP: Sidebar de Filtros fixo */}
      <aside className="hidden md:block sticky top-24 space-y-8 p-4 border border-border rounded-xl shadow-gift bg-card/70 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-primary border-b border-border pb-2 flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Refinar Busca
        </h2>

        <SearchInput />
        <PriceFilter />
        <StoreFilter availableStores={availableStores} />
      </aside>
    </>
  );
}
