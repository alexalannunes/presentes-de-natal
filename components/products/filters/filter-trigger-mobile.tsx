// components/products/filter-trigger-mobile.tsx
"use client";

import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { X } from "lucide-react";

interface FilterTriggerMobileProps {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode; // O conteúdo de filtro (Select, Checkboxes, etc.)
  currentValueDisplay: string; // Ex: "R$ 100-300" ou "Amazon, Magalu"
}

export function FilterTriggerMobile({
  label,
  icon,
  children,
  currentValueDisplay,
}: FilterTriggerMobileProps) {
  // Estado para controlar a abertura/fechamento
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      {/* 1. O Botão/Célula na Barra de Filtro (Trigger) */}
      <Drawer.Trigger asChild>
        <Button
          variant="outline"
          className={cn(
            "rounded-full h-9 px-3 text-sm flex items-center gap-1.5 whitespace-nowrap",
            "border-border text-foreground hover:bg-muted/50",
            // Destaca se o filtro estiver ativo
            currentValueDisplay ? "border-primary font-semibold bg-muted" : ""
          )}
        >
          {icon}
          {currentValueDisplay ? (
            <span className="truncate max-w-[100px]">
              {currentValueDisplay}
            </span>
          ) : (
            <span>{label}</span>
          )}
        </Button>
      </Drawer.Trigger>

      {/* 2. O Bottom Sheet com o conteúdo do filtro */}
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex flex-col rounded-t-xl bg-background shadow-2xl focus:outline-none h-[70vh]">
          <div
            aria-hidden
            className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mt-3"
          />

          {/* Cabeçalho do Drawer */}
          <div className="p-4 border-b border-border/50 flex justify-between items-center">
            <Drawer.Title className="text-xl font-bold text-foreground flex items-center gap-2">
              {icon} {label}
            </Drawer.Title>
            <Drawer.Close asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </Drawer.Close>
          </div>

          {/* Conteúdo do Filtro (Children) */}
          <div className="p-4 space-y-6 overflow-y-auto flex-1">{children}</div>

          {/* Botão Aplicar/Fechar */}
          <div className="p-4 border-t border-border/50 w-full bg-background">
            <Drawer.Close asChild>
              <Button className="w-full rounded-full shadow-lg">
                Aplicar e Ver Resultados
              </Button>
            </Drawer.Close>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
