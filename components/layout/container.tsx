// components/layout/Container.tsx

import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    // mx-auto: centraliza | max-w-7xl: largura máxima | px-4, sm:px-6, lg:px-8: padding responsivo
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
