// app/page.tsx
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      <div className="text-center py-16 sm:py-24">
        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-4">
          <span className="text-primary">O Presente Ideal</span> para{" "}
          <span className="decoration-wavy decoration-primary underline">
            Ele
          </span>{" "}
          neste Natal 🎄
        </h1>

        {/* Subtítulo: Focado no Público-Alvo (Mulheres) */}
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground mb-8">
          Cansada de presentear com meias ou perfumes? Nós resolvemos o seu
          problema! Curadoria especializada em{" "}
          <strong className="font-semibold">ferramentas</strong>,{" "}
          <strong className="font-semibold">hobbies</strong> e{" "}
          <strong className="font-semibold">tecnologia</strong>, feita sob
          medida para homens que amam projetos e aventura.
        </p>

        {/* CTA Principal */}
        <div className="flex justify-center space-x-4 mb-16">
          <Link href="/products" passHref>
            <Button
              size="lg"
              className="rounded-full shadow-gift-hover transition-shadow duration-300 text-lg"
            >
              Explorar o Catálogo Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Seção de Benefícios */}
        <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
          <div className="p-6 border border-border rounded-xl bg-card shadow-gift">
            <Wrench className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Foco em Valor</h3>
            <p className="text-muted-foreground">
              De Makitas a Katanas: só presentes com alto valor percebido e
              utilidade real, perfeitos para homens com hobbies específicos.
            </p>
          </div>

          <div className="p-6 border border-border rounded-xl bg-card shadow-gift">
            <Gift className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Simples de Usar</h3>
            <p className="text-muted-foreground">
              Com nosso filtro fácil, você encontra o presente ideal por faixa
              de preço ou loja em segundos, sem complicação.
            </p>
          </div>

          <div className="p-6 border border-border rounded-xl bg-card shadow-gift">
            <Sparkles className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Controle Total</h3>
            <p className="text-muted-foreground">
              O site é ultrarrápido e construído para campanhas de afiliados.
              Links rastreados e URLs prontas para o seu tráfego pago.
            </p>
          </div>
        </div>

        {/* CTA Principal */}
        <div className="flex justify-center space-x-4 mt-16 md:hidden">
          <Link href="/products" passHref>
            <Button
              size="lg"
              className="rounded-full shadow-gift-hover transition-shadow duration-300 text-lg"
            >
              Explorar o Catálogo Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
