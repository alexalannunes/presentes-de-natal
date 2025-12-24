"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export function ExploreProductsButton() {
  return (
    <div className="flex justify-center space-x-4 mt-16">
      <Link href="/products" passHref>
        <Button
          size="lg"
          className="rounded-full shadow-gift-hover transition-shadow duration-300 text-lg"
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "click_explore_catalog", {
                event_category: "engagement",
                event_label: "Explore Full Catalog from Ads Page",
              });
            }

            if (typeof window !== "undefined" && window.fbq) {
              window.fbq("trackCustom", "ExploreCatalogClick", {
                event_category: "engagement",
              });
            }
          }}
        >
          <ArrowLeft className="ml-2 h-5 w-5" /> Explorar o Catálogo
        </Button>
      </Link>
    </div>
  );
}
