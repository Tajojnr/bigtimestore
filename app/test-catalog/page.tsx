import Image from "next/image";
import { BIGTIME_CATALOG } from "@/app/data/catalogData";

export default function TestCatalog() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <h1 className="mb-2 text-3xl font-black text-[#0B1E38]">
        Image Verification Test
      </h1>
      <p className="mb-8 text-slate-600">
        Showing {BIGTIME_CATALOG.length} products. If images appear below, the
        product PNGs are loading correctly.
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {BIGTIME_CATALOG.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border bg-white p-3 text-center shadow-sm"
          >
            <div className="mb-2 flex h-24 items-center justify-center overflow-hidden rounded-lg bg-slate-100">
              <Image
                src={item.image}
                alt={item.name}
                width={240}
                height={144}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="line-clamp-2 text-[10px] font-bold text-slate-800">
              {item.name}
            </p>
            <p className="text-[10px] font-black text-orange-600">
              ₦{item.wholesalePrice.toLocaleString()}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
