// app/page.tsx
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Gift,
  Sparkles,
  Wrench,
  Search,
  MousePointerClick,
  Lock, // Usando o ícone de Lock para o card de segurança
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      <div className="text-center py-12 sm:py-16">
        {/* === SEÇÃO 1: HERO === */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-4">
            <span className="text-primary">O Presente Ideal</span> para{" "}
            <span className="decoration-wavy decoration-primary underline">
              Ele
            </span>{" "}
            neste Natal 🎄
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-muted-foreground mb-8">
            Sua curadoria completa para presentear homens. Encontre ideias de
            <strong className="font-semibold"> ferramentas 🛠️</strong>,
            <strong className="font-semibold"> hobbies 🎮</strong>,
            <strong className="font-semibold"> tecnologia 📱</strong>,
            <strong className="font-semibold"> moda 👕</strong>,
            <strong className="font-semibold"> itens de bar 🥃</strong> e muito
            mais. Nós fazemos o trabalho duro da pesquisa, você só se preocupa
            em escolher.
          </p>

          <div className="flex justify-center space-x-4">
            <Link href="/products" passHref>
              <Button
                size="lg"
                className="rounded-full shadow-gift-hover transition-shadow duration-300 text-lg"
              >
                Ver Ideias de Presente <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </header>

        {/* --- Separador Visual --- */}
        <hr className="my-16 border-t border-border/50 max-w-lg mx-auto" />

        {/* === SEÇÃO 2: COMO FUNCIONA (O Processo Simples de 3 Passos) === */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
            Como Funciona?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {/* Passo 1: Filtrar */}
            <div className="p-6 border border-border rounded-xl bg-card shadow-gift flex flex-col items-center text-center">
              <Search className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold text-xl mb-2">
                1. Filtrar Rápido 🔍
              </h3>
              <p className="text-muted-foreground">
                Use a busca ou os filtros de preço e loja para refinar sua
                pesquisa em <strong className="font-semibold">segundos</strong>.
              </p>
            </div>

            {/* Passo 2: Achar o Presente */}
            <div className="p-6 border border-border rounded-xl bg-card shadow-gift flex flex-col items-center text-center">
              <Sparkles className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold text-xl mb-2">
                2. Achar a Ideia Certa ✨
              </h3>
              <p className="text-muted-foreground">
                Nosso catálogo exibe os{" "}
                <strong className="font-semibold">melhores presentes</strong> de
                diferentes categorias com descrições objetivas.
              </p>
            </div>

            {/* Passo 3: Comprar Direto (Ênfase na Afiliação) */}
            <div className="p-6 border border-border rounded-xl bg-card shadow-gift flex flex-col items-center text-center">
              <MousePointerClick className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold text-xl mb-2">
                3. Comprar Sem Enrolação 🛍️
              </h3>
              <p className="text-muted-foreground">
                Achou o presente? É só clicar! Você é direcionada direto para a
                loja parceira (Amazon, Magalu, etc.) para a compra{" "}
                <strong className="font-semibold">imediata</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* --- Separador Visual --- */}
        <hr className="my-16 border-t border-border/50 max-w-lg mx-auto" />

        {/* === SEÇÃO 3: POR QUE ESCOLHER (Benefícios da Curadoria) === */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
            Por Que Usar Nosso Catálogo?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {/* Card 1: Curadoria Ampla */}
            <div className="p-6 border border-border rounded-xl bg-card shadow-gift">
              <Wrench className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Curadoria Ampla 🎁</h3>
              <p className="text-muted-foreground">
                Não nos limitamos a um nicho. De{" "}
                <strong className="font-semibold">ferramentas</strong> a{" "}
                <strong className="font-semibold">cuidados pessoais</strong>,
                listamos presentes de{" "}
                <strong className="font-semibold">alto valor percebido</strong>{" "}
                para todos os tipos de homens.
              </p>
            </div>

            {/* Card 2: Foco no Seu Perfil */}
            <div className="p-6 border border-border rounded-xl bg-card shadow-gift">
              <Gift className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">
                Foco no Seu Perfil ❤️
              </h3>
              <p className="text-muted-foreground">
                Otimizado para quem busca presentes, com foco na descrição dos
                produtos{" "}
                <strong className="font-semibold">
                  ideal para auxiliar a sua escolha
                </strong>
                , e não a dele.
              </p>
            </div>

            {/* Card 3: COMPRAS SEGURAS */}
            <div className="p-6 border border-border rounded-xl bg-card shadow-gift">
              <Lock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">
                Compra Sem Surpresas 🔒
              </h3>
              <p className="text-muted-foreground">
                <strong className="font-semibold">Sem intermediários</strong>.
                Após escolher, você é levada{" "}
                <strong className="font-semibold">
                  direto para a loja parceira
                </strong>{" "}
                (Amazon, Magalu, etc.) para finalizar a compra com segurança.
              </p>
            </div>
          </div>
        </section>

        {/* === SEÇÃO 4: CTA FINAL (Para Mobile, caso o usuário role até o fim) === */}
        <div className="flex justify-center space-x-4 mt-16">
          <Link href="/products" passHref>
            <Button
              size="lg"
              className="rounded-full shadow-gift-hover transition-shadow duration-300 text-lg"
            >
              Explorar o Catálogo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
