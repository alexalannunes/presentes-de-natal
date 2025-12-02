// components/products/ImageSlider.tsx
"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
interface ImageSliderProps {
  images: string[];
  name: string;
}

export function ImageSlider({ images, name }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (images.length === 0) return null;

  return (
    <div className="relative aspect-square sm:aspect-[4/3] w-full">
      {/* Imagem Atual */}
      <Image
        src={images[currentImageIndex]}
        alt={`Imagem ${currentImageIndex + 1} de ${name}`}
        fill
        priority={currentImageIndex === 0} // Apenas a primeira imagem deve ter prioridade
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-all duration-300"
      />

      {/* Controles de Navegação (Apenas se houver mais de 1 imagem) */}
      {hasMultipleImages && (
        <div className="hidden sm:flex">
          {/* Botão Anterior */}
          <Button
            onClick={prevImage}
            variant="ghost"
            size="icon"
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-background/60 hover:bg-background/80",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Botão Próximo */}
          <Button
            onClick={nextImage}
            variant="ghost"
            size="icon"
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-background/60 hover:bg-background/80",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Indicadores de Ponto (Dots) */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  index === currentImageIndex
                    ? "bg-primary w-4"
                    : "bg-background/80"
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
