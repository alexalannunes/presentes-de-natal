// components/layout/Header.tsx
import Link from "next/link";
import { ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { ThemeToggle } from '@/components/misc/ThemeToggle'; // Assumindo que você tem um ThemeToggle shadcn
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo/Marca */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl tracking-tight text-primary"
        >
          <Sparkles className="h-6 w-6 text-primary" />
          <span>Presente Certo</span>
        </Link>

        {/* Navegação e Ações */}
        <div className="flex items-center space-x-4">
          <Link href="/products" passHref>
            <Button
              variant="ghost"
              className="hidden sm:inline-flex rounded-lg text-foreground hover:bg-muted"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Ver Catálogo
            </Button>
          </Link>

          {/* <ThemeToggle /> */}

          {/* Botão Mobile - Link para o catálogo */}
          <Link href="/products" passHref className="sm:hidden">
            <Button variant="outline" size="icon" className="rounded-lg">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}
