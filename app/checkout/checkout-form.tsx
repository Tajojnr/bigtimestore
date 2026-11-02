"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import type { ProductItem } from "@/app/data/catalogData";

type CheckoutFormProps = {
  product: ProductItem;
  unitPrice: number;
};

const formatPrice = (price: number) => `₦${price.toLocaleString("en-NG")}`;

export default function CheckoutForm({
  product,
  unitPrice,
}: CheckoutFormProps) {
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const customerName = String(formData.get("customerName")).trim();
    const customerPhone = String(formData.get("customerPhone")).trim();
    const deliveryAddress = String(formData.get("deliveryAddress")).trim();
    const total = unitPrice * quantity;

    const orderSummary = [
      "Hello Bigtime Online Store, I'd like to place this order:",
      "",
      "ORDER SUMMARY",
      `Product: ${product.name}`,
      `Unit price: ${formatPrice(unitPrice)}`,
      `Quantity: ${quantity}`,
      `Subtotal: ${formatPrice(total)}`,
      "Delivery: Please confirm delivery fee",
      "",
      "CUSTOMER DETAILS",
      `Name: ${customerName}`,
      `Phone: ${customerPhone}`,
      `Delivery address: ${deliveryAddress}`,
      "",
      "Please confirm availability and the final total including delivery.",
    ].join("\n");

    window.location.assign(
      `https://wa.me/2348037753166?text=${encodeURIComponent(orderSummary)}`,
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f4]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-brand-orange-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue shopping
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
            <ShieldCheck className="h-4 w-4" />
            Secure order details
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
            Bigtime Online Store
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#10243c] sm:text-4xl">
            Complete your order
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Add your delivery details. We’ll send your order summary to WhatsApp
            so our team can confirm availability and delivery.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid items-start gap-5 lg:grid-cols-[1fr_360px]"
        >
          <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
                1
              </span>
              <div>
                <h2 className="font-bold text-[#10243c]">
                  Delivery information
                </h2>
                <p className="text-xs text-slate-500">
                  Tell us where to deliver your order.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Full name
                <input
                  autoComplete="name"
                  name="customerName"
                  required
                  maxLength={100}
                  placeholder="Name of recipient"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange-light"
                />
              </label>

              <label className="text-sm font-semibold text-slate-700">
                Phone number
                <input
                  autoComplete="tel"
                  name="customerPhone"
                  type="tel"
                  required
                  maxLength={30}
                  placeholder="e.g. 0803 123 4567"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange-light"
                />
              </label>

              <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
                Delivery address
                <textarea
                  autoComplete="street-address"
                  name="deliveryAddress"
                  required
                  maxLength={500}
                  rows={3}
                  placeholder="House number, street, area, city and state"
                  className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 px-3.5 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange-light"
                />
              </label>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
                  2
                </span>
                <div>
                  <h2 className="font-bold text-[#10243c]">
                    Review your item
                  </h2>
                  <p className="text-xs text-slate-500">
                    You can update the quantity before placing your order.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-slate-200 p-3 sm:p-4">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-[#f4f3ef] p-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {product.category}
                    </p>
                    <h3 className="mt-1 text-sm font-bold text-[#10243c]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {product.specs}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <p className="text-sm font-black text-[#10243c]">
                      {formatPrice(unitPrice)}
                      <span className="ml-1 text-[10px] font-normal text-slate-500">
                        / item
                      </span>
                    </p>
                    <div className="inline-flex items-center rounded-lg border border-slate-200">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        disabled={quantity <= 1}
                        onClick={() =>
                          setQuantity((current) => Math.max(1, current - 1))
                        }
                        className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:text-brand-orange-dark disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span
                        aria-live="polite"
                        className="min-w-8 text-center text-sm font-bold"
                      >
                        {quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() =>
                          setQuantity((current) => Math.min(99, current + 1))
                        }
                        disabled={quantity >= 99}
                        className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:text-brand-orange-dark disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 lg:sticky lg:top-6">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-brand-orange-dark" />
              <h2 className="font-bold text-[#10243c]">Order summary</h2>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4 text-slate-600">
                <span>Items ({quantity})</span>
                <span className="font-semibold text-slate-800">
                  {formatPrice(unitPrice * quantity)}
                </span>
              </div>
              <div className="flex justify-between gap-4 text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Delivery
                </span>
                <span className="text-right text-xs">Confirm on WhatsApp</span>
              </div>
              <div className="border-t border-dashed border-slate-200 pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-bold text-[#10243c]">Subtotal</span>
                  <span className="text-xl font-black text-[#10243c]">
                    {formatPrice(unitPrice * quantity)}
                  </span>
                </div>
                <p className="mt-1 text-right text-[11px] text-slate-500">
                  Delivery fee is confirmed by our team.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" />
              Place order on WhatsApp
            </button>

            <p className="mt-3 text-center text-[11px] leading-5 text-slate-500">
              Your order details open in WhatsApp. No payment is taken on this
              page.
            </p>

            <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Confirm product availability with our team
              </p>
              <p className="flex items-center gap-2">
                <PackageCheck className="h-4 w-4 text-emerald-600" />
                Agree delivery fee before payment
              </p>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}
