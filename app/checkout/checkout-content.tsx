"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BIGTIME_CATALOG } from "@/app/data/catalogData";
import CheckoutForm from "./checkout-form";

export default function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const mode = searchParams.get("mode");
  const product = BIGTIME_CATALOG.find((item) => item.id === productId);

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f7f4] px-4 text-center">
        <h1 className="text-2xl font-black text-[#10243c]">
          We couldn’t find that product
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Return to the catalog and choose an item to order.
        </p>
        <Link
          href="/#shop"
          className="mt-5 rounded-lg bg-brand-orange px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange-dark"
        >
          Browse products
        </Link>
      </main>
    );
  }

  const unitPrice =
    mode === "wholesale" ? product.wholesalePrice : product.retailPrice;

  return <CheckoutForm product={product} unitPrice={unitPrice} />;
}
