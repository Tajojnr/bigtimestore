"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Fingerprint,
  Home,
  Layers,
  LayoutGrid,
  MapPin,
  MessageCircle,
  PackageCheck,
  Printer,
  Search,
  Shield,
  ShoppingBag,
  Store,
  Sun,
  Truck,
  Zap,
} from "lucide-react";
import { BIGTIME_CATALOG } from "@/app/data/catalogData";
import TechText from "@/app/components/TechText";

const categories = [
  { id: "all", label: "All products", icon: Layers },
  { id: "solar", label: "Solar & fans", icon: Sun },
  { id: "pos", label: "POS & printers", icon: Printer },
  { id: "biometrics", label: "NIN scanners", icon: Fingerprint },
  { id: "security", label: "CCTV & security", icon: Shield },
  { id: "power", label: "Power & data", icon: Zap },
];

type SocialPlatform = "facebook" | "instagram" | "tiktok" | "youtube" | "linkedin";

const socialLinks: { platform: SocialPlatform; label: string; href: string }[] = [
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/bigtimeonlinestore",
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/bigtimeonlinestore/",
  },
  {
    platform: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@bigtimeonlinestore",
  },
  {
    platform: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@bigtimeonlinestore",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/big-time-online-store/",
  },
];

const featuredProduct = BIGTIME_CATALOG[0];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6H17V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2V10H7.7v3h2.7v8z" />
      </svg>
    );
  }

  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.7" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (platform === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.7 3h-3.3v11.6a2.8 2.8 0 1 1-2.4-2.8V8.4a6.1 6.1 0 1 0 5.7 6.1V8.6a8.3 8.3 0 0 0 4.3 1.2V6.5a5 5 0 0 1-4.3-3.5Z" />
      </svg>
    );
  }

  if (platform === "youtube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.7 15.7V8.3l6.2 3.7-6.2 3.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3zM11.5 10h-2.9v10h3v-5c0-1.3.2-2.6 1.9-2.6s1.7 1.5 1.7 2.7V20h3v-5.5c0-2.7-.6-4.8-3.8-4.8a3.3 3.3 0 0 0-2.9 1.6z" />
    </svg>
  );
}

export default function Storefront() {
  const [isWholesale, setIsWholesale] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = BIGTIME_CATALOG.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.specs.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const featuredPrice = isWholesale
    ? featuredProduct.wholesalePrice
    : featuredProduct.retailPrice;

  return (
    <div
      id="top"
      className="min-h-screen bg-[#f7f7f4] pb-20 text-[#182334] md:pb-0"
    >
      <div className="hidden border-b border-slate-100 bg-slate-50 md:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-6 text-[11px] text-slate-500">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-600">
              Trusted tech, fair prices, delivered nationwide
            </span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-brand-orange" />
              Badawa Yantifa, Kano
            </span>
          </div>
          <a
            href="tel:+2348037753166"
            className="font-semibold text-slate-600 transition hover:text-brand-orange-dark"
          >
            Need help? 08037753166
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-[0_2px_8px_rgba(16,36,60,0.04)]">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2.5 sm:px-6 sm:py-3">
          <a href="#top" className="flex shrink-0 items-center gap-2">
            <Image
              src="/Bigtime%20Online%20Store%20Badge.png"
              alt="Bigtime Online Store"
              width={44}
              height={44}
              className="h-9 w-9 object-contain sm:h-11 sm:w-11"
              priority
            />
            <span className="leading-tight">
              <span className="block text-[13px] font-black tracking-[0.06em] text-[#10243c] sm:text-base">
                BIGTIME
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.13em] text-brand-orange-dark sm:text-[10px]">
                Online store
              </span>
            </span>
          </a>

          <label className="relative mx-auto hidden max-w-2xl flex-1 md:block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search solar fans, POS, CCTV cameras..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange-light"
            />
          </label>

          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0 md:gap-3">
            <button
              type="button"
              aria-pressed={isWholesale}
              onClick={() => setIsWholesale((current) => !current)}
              className={`inline-flex h-9 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold transition sm:h-10 sm:px-3 ${
                isWholesale
                  ? "border-brand-orange bg-brand-orange-light text-brand-orange-dark"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>{isWholesale ? "Wholesale" : "Retail"}</span>
            </button>
            <a
              href="https://wa.me/2348037753166"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Bigtime on WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 sm:h-10 sm:w-10"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-100 px-3 py-2.5 md:hidden">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search the catalog"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-100 py-2.5 pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange-light"
            />
          </label>
        </div>

        <nav
          aria-label="Shop categories"
          className="hidden border-t border-slate-100 md:block"
        >
          <div className="mx-auto flex max-w-7xl items-center gap-7 overflow-x-auto px-6">
            {categories.map((category) => (
              <a
                key={category.id}
                href="#shop"
                onClick={() => setSelectedCategory(category.id)}
                className={`relative shrink-0 py-3 text-xs font-semibold transition hover:text-brand-orange-dark ${
                  selectedCategory === category.id
                    ? "text-brand-orange-dark after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-brand-orange"
                    : "text-slate-600"
                }`}
              >
                {category.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(16,36,60,0.08)] backdrop-blur-md md:hidden"
      >
        <div className="mx-auto grid h-16 max-w-lg grid-cols-4">
          <a
            href="#top"
            className="flex flex-col items-center justify-center gap-1 text-[10px] font-semibold text-brand-orange-dark"
          >
            <Home className="h-[18px] w-[18px]" />
            Home
          </a>
          <a
            href="#categories"
            className="flex flex-col items-center justify-center gap-1 text-[10px] font-medium text-slate-500 transition hover:text-brand-orange-dark"
          >
            <LayoutGrid className="h-[18px] w-[18px]" />
            Categories
          </a>
          <a
            href="#shop"
            className="flex flex-col items-center justify-center gap-1 text-[10px] font-medium text-slate-500 transition hover:text-brand-orange-dark"
          >
            <Store className="h-[18px] w-[18px]" />
            Shop
          </a>
          <a
            href="https://wa.me/2348037753166"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1 text-[10px] font-medium text-slate-500 transition hover:text-brand-orange-dark"
          >
            <MessageCircle className="h-[18px] w-[18px]" />
            Contact
          </a>
        </div>
      </nav>

      <main>
        <section className="relative isolate overflow-hidden border-t-2 border-brand-orange bg-[#10243c] text-white">
          <div className="absolute inset-y-0 right-0 -z-10 hidden w-[44%] bg-[#f1f1ed] md:block" />
          <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-5 sm:px-6 sm:py-8 md:grid-cols-[1.08fr_0.92fr] md:gap-10 md:py-10 lg:gap-14 lg:py-12">
            <div className="order-2 max-w-2xl py-2 md:order-1 md:py-4">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange-bright sm:mb-5 sm:text-xs">
                Kano, Nigeria <span className="text-white/45">·</span>{" "}
                Nationwide delivery
              </p>
              <TechText
                text="BIGTIME"
                fontWeight={700}
                fontSize={150}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                className="mb-1 h-12 sm:mb-2 sm:h-16 md:h-[4.5rem] lg:h-20"
              />
              <h1 className="max-w-2xl text-[clamp(2.25rem,5vw,4.25rem)] font-black leading-[0.98] tracking-[-0.045em]">
                Power your home.
                <br />
                <span className="text-[#ffbd83]">Grow your business.</span>
              </h1>
              <p className="mt-3 max-w-lg text-xs leading-5 text-slate-200 sm:mt-5 sm:text-base sm:leading-7">
                Solar, business and security essentials, selected in Kano and
                delivered across Nigeria. Shop retail or wholesale.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-3">
                <a
                  href="#shop"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange-dark"
                >
                  Explore the catalog
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/2348037753166"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden items-center gap-2 rounded-lg border border-white/25 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5 sm:inline-flex"
                >
                  <MessageCircle className="h-4 w-4" />
                  Talk to our team
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-medium text-slate-300 sm:mt-8 sm:gap-x-6 sm:text-xs">
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                  Trusted products
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                  Nationwide delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <PackageCheck className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                  Retail & wholesale
                </span>
              </div>
            </div>
            <div className="relative order-1 mx-auto w-full max-w-lg rounded-2xl bg-[#f1f1ed] p-2.5 sm:p-4 md:order-2 md:max-w-none md:rounded-none md:bg-transparent md:p-0">
              <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2.5 sm:p-4 md:rounded-2xl md:p-4">
                <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-lg bg-[#f7f7f4] sm:h-72 md:h-[22rem] lg:h-[25rem]">
                  <span className="absolute left-3 top-3 z-10 rounded-md bg-[#10243c] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white sm:left-4 sm:top-4">
                    Featured pick
                  </span>
                  <Image
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    width={520}
                    height={390}
                    priority
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="h-full w-full object-contain p-3 sm:p-6"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-1 pt-3 text-[#182334] sm:gap-4 sm:pt-4">
                  <div>
                    <h2 className="max-w-xs text-sm font-bold leading-snug sm:text-base">
                      {featuredProduct.name}
                    </h2>
                    <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                      {featuredProduct.specs}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                        {isWholesale ? "Wholesale" : "Retail"}
                      </p>
                      <p className="mt-0.5 text-lg font-black text-[#10243c] sm:text-xl">
                        ₦{featuredPrice.toLocaleString()}
                      </p>
                    </div>
                    <a
                      href={`/checkout?product=${encodeURIComponent(featuredProduct.id)}&mode=${isWholesale ? "wholesale" : "retail"}`}
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-brand-orange px-3 text-xs font-semibold text-white transition hover:bg-brand-orange-dark sm:h-10 sm:px-4"
                    >
                      Order
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="categories"
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Browse the store
              </p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-[#10243c] sm:text-3xl">
                Shop by category
              </h2>
            </div>
            <a
              href="#shop"
              className="hidden items-center gap-1.5 text-sm font-bold text-[#10243c] transition hover:text-brand-orange-dark sm:flex"
            >
              Browse all products
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "border-brand-orange/30 bg-brand-orange-light text-brand-orange-dark"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black tracking-tight text-[#10243c] sm:text-3xl">
                  {selectedCategory === "all"
                    ? "The catalog"
                    : categories.find((category) => category.id === selectedCategory)
                        ?.label}
                </h2>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-500 ring-1 ring-slate-200">
                  {filteredProducts.length}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-slate-500">
                {isWholesale
                  ? "Farashin Sari pricing is on — see your bulk savings."
                  : "Practical picks for home, business and everyday life."}
              </p>
            </div>
            {isWholesale && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange-light px-3 py-1.5 text-xs font-bold text-brand-orange-dark">
                <ArrowDownRight className="h-4 w-4" />
                Wholesale prices
              </span>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => {
                const displayPrice = isWholesale
                  ? product.wholesalePrice
                  : product.retailPrice;
                const savings = product.retailPrice - product.wholesalePrice;

                return (
                  <article
                    key={product.id}
                    className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300 sm:rounded-2xl"
                  >
                    <div className="relative m-2 flex h-32 items-center justify-center overflow-hidden rounded-lg bg-[#f6f6f3] sm:m-3 sm:h-48 sm:rounded-xl">
                      {product.badge && (
                        <span className="absolute left-2 top-2 z-10 rounded-md bg-white/95 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-slate-600 shadow-sm sm:left-3 sm:top-3 sm:text-[9px]">
                          {product.badge}
                        </span>
                      )}
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={480}
                        height={360}
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 23vw"
                        className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-[1.03] sm:p-5"
                      />
                    </div>

                    <div className="flex flex-1 flex-col px-3 pb-3 sm:px-4 sm:pb-4">
                      <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-slate-500 sm:text-[10px]">
                        {categories.find(
                          (category) => category.id === product.category,
                        )?.label ?? product.category}
                      </p>
                      <h3 className="mt-1 min-h-10 line-clamp-2 text-xs font-semibold leading-snug text-[#182334] sm:min-h-11 sm:text-sm">
                        {product.name}
                      </h3>
                      <p className="mt-1.5 hidden min-h-9 line-clamp-2 text-xs leading-relaxed text-slate-500 sm:block">
                        {product.specs}
                      </p>

                      <div className="mt-auto pt-3">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <span className="text-base font-bold tracking-tight text-[#10243c] sm:text-lg">
                            ₦{displayPrice.toLocaleString()}
                          </span>
                          {isWholesale && savings > 0 && (
                            <span className="text-[10px] text-slate-400 line-through">
                              ₦{product.retailPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        {isWholesale && savings > 0 && (
                          <p className="mt-1 text-[10px] font-semibold text-emerald-700">
                            Save ₦{savings.toLocaleString()}
                          </p>
                        )}
                        <a
                          href={`/checkout?product=${encodeURIComponent(product.id)}&mode=${isWholesale ? "wholesale" : "retail"}`}
                          className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-orange px-2 py-2.5 text-[10px] font-semibold text-white transition hover:bg-brand-orange-dark sm:gap-2 sm:text-xs"
                        >
                          <ShoppingBag className="h-3.5 w-3.5" />
                          Place order
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
              <Search className="mx-auto h-8 w-8 text-slate-300" />
              <h3 className="mt-3 text-base font-bold text-[#10243c]">
                No products found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try a different search or browse another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 rounded-lg bg-[#10243c] px-4 py-2 text-xs font-bold text-white transition hover:bg-brand-orange"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-[#0c1b2a] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_0.8fr_1fr] md:py-14">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <Image
                src="/Bigtime%20Online%20Store%20Badge.png"
                alt=""
                width={48}
                height={48}
                className="h-11 w-11 rounded-full bg-white object-contain"
              />
              <span className="font-black tracking-[0.08em]">
                BIGTIME
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-brand-orange">
                  Online store
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Trusted tech for homes and businesses. Proudly based in Kano,
              delivering essentials to customers across Nigeria.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="h-4 w-4 text-brand-orange" />
              Badawa Yantifa, Kano State
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Explore
            </h2>
            <nav aria-label="Footer navigation" className="mt-4 flex flex-col gap-3">
              <a
                href="#top"
                className="w-fit text-sm text-slate-300 transition hover:text-brand-orange"
              >
                Home
              </a>
              <a
                href="#categories"
                className="w-fit text-sm text-slate-300 transition hover:text-brand-orange"
              >
                Shop by category
              </a>
              <a
                href="#shop"
                className="w-fit text-sm text-slate-300 transition hover:text-brand-orange"
              >
                All products
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Connect with us
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Questions about a product or bulk pricing? Our team is here to
              help.
            </p>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Follow Bigtime Online Store
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit Bigtime Online Store on ${social.label}`}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-brand-orange hover:bg-brand-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-bright focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1b2a]"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/2348037753166"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-brand-orange-dark"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="tel:+2348037753166"
                className="inline-flex items-center rounded-lg border border-white/20 px-3.5 py-2.5 text-xs font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                08037753166
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>© Bigtime Online Store. All rights reserved.</p>
            <p>Retail & wholesale · Nationwide delivery</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
