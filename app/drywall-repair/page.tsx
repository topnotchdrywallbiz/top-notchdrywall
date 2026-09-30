import Link from "next/link";

export const metadata = {
  title: "Drywall Repair Bloomington-Normal IL | Top Notch Drywall",
  description:
    "Professional drywall repair in Bloomington-Normal and Central Illinois. Ceiling repairs, patches, water damage, flood cuts, texture matching, and more.",
};

export default function DrywallRepairPage() {
  return (
    <main className="min-h-screen bg-white text-[#03244d]">
           <header className="sticky top-0 z-50 bg-[#03244d] shadow-xl">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          <div
  className="font-black italic text-2xl md:text-3xl text-[#ff5a00] tracking-tight"
  style={{
    WebkitTextStroke: "1.5px white",
    paintOrder: "stroke fill",
  }}
>
            TOP NOTCH DRYWALL
          </div>

          <nav className="hidden md:flex gap-8 font-semibold">
            <a href="#home" className="hover:text-[#ff5a00]">
              Home
            </a>

            <a href="#services" className="hover:text-[#ff5a00]">
              Services
            </a>

            <a href="#work" className="hover:text-[#ff5a00]">
              Our Work
            </a>

            <a href="#about" className="hover:text-[#ff5a00]">
              About
            </a>

            <a href="#contact" className="hover:text-[#ff5a00]">
              Contact
            </a>
          </nav>

          <a
            href="tel:3095316825"
            className="bg-[#ff5a00] px-5 py-3 rounded-xl font-black hover:bg-orange-600 transition"
          >
            309-531-6825
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#03244d] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#ff5a00] font-black tracking-widest uppercase mb-3">
            Top Notch Drywall
          </p>

          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Drywall Repair in Bloomington-Normal, IL
          </h1>

          <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8">
            Professional drywall repair for walls and ceilings throughout
            Bloomington-Normal and surrounding Central Illinois communities.
            From small patches to water-damage repairs, we provide clean,
            professional results from start to finish.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-[#ff5a00] text-white font-black px-8 py-4 rounded-xl"
          >
            GET A FREE ESTIMATE
          </Link>

        </div>
      </section>

      {/* REPAIR SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#ff5a00] font-black tracking-widest uppercase text-center mb-3">
            Drywall Repair Services
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
            PROFESSIONAL WALL & CEILING REPAIRS
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">Holes & Patches</h3>
              <p>
                Repair of holes, dents, damaged drywall, and other wall or
                ceiling damage.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">Ceiling Repairs</h3>
              <p>
                Professional repairs for damaged, cracked, or compromised
                drywall ceilings.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">Water Damage</h3>
              <p>
                Drywall replacement and finishing for water damage, flood cuts,
                and damaged areas.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">Texture Matching</h3>
              <p>
                Knockdown, stomp, skip trowel, and other texture repairs
                designed to blend with surrounding surfaces.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">Plaster & Lath</h3>
              <p>
                Drywall overlay and repair solutions for older plaster and
                lath walls and ceilings.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">Larger Repairs</h3>
              <p>
                Repairs ranging from individual damaged areas to larger wall
                and ceiling sections.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#03244d] text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          NEED DRYWALL REPAIRED?
        </h2>

        <p className="text-gray-200 mb-8">
          Contact Top Notch Drywall for a free estimate in Bloomington-Normal
          and surrounding Central Illinois communities.
        </p>

        <Link
          href="/#contact"
          className="inline-block bg-[#ff5a00] text-white font-black px-8 py-4 rounded-xl"
        >
          GET A FREE ESTIMATE
        </Link>
      </section>

    </main>
  );
}