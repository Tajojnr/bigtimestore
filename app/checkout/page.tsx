import { Suspense } from "react";
import CheckoutContent from "./checkout-content";

function CheckoutFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f7f4] px-4">
      <p className="text-sm font-medium text-slate-600">
        Preparing your order…
      </p>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutFallback />}>
      <CheckoutContent />
    </Suspense>
  );
}
