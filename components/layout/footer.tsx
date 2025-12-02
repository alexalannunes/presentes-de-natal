// components/layout/Footer.tsx
import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-border py-8 text-sm text-muted-foreground">
      <Container className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        <p>
          &copy; {currentYear} Presente Certo. Todos os direitos reservados.
        </p>

        <div className="flex space-x-6">
          <Link
            href="/sobre"
            className="hover:text-foreground transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/termos"
            className="hover:text-foreground transition-colors"
          >
            Termos de Uso
          </Link>
          <Link
            href="/privacidade"
            className="hover:text-foreground transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </Container>
      <Container className="mt-4 pt-4 border-t border-border/50 text-xs text-center">
        <p>
          Este site é um catálogo de afiliados e contém links de parceiros. Ao
          clicar em um produto e efetuar uma compra, podemos receber uma
          comissão sem custo adicional para você.
        </p>
      </Container>
    </footer>
  );
}
