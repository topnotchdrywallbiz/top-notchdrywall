import Link from "next/link";

export const metadata = {
  title: "Interior Painting Bloomington-Normal IL | Top Notch Drywall",
  description:
    "Professional interior painting in Bloomington-Normal and Central Illinois. Walls, ceilings, trim, color changes, drywall repairs, and complete interior painting.",
};

export default function InteriorPaintingPage() {
  return (
    <main className="min-h-screen bg-white text-[#03244d]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#03244d] shadow-xl">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="font-black italic text-2xl md:text-3xl text-[#ff5a00] tracking-tight"
            style={{
              WebkitTextStroke: "1.5px white",
              paintOrder: "stroke fill",
            }}
          >
            TOP NOTCH
            <br />
            DRYWALL
          </Link>

          <a
            href="tel:3095316825"
            className="bg-[#ff5a00] text-white px-5 py-3 rounded-xl font-black hover:bg-orange-600"
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

          <h1 className="text-4xl md:text-5xl font-black mb-6 max-w-4xl">
            Interior Painting
            <br />
           Bloomington-Normal, IL
          </h1>

          <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8">
            Professional interior painting for homes, remodels, basements,
            and newly finished drywall throughout Bloomington-Normal and
            surrounding Central Illinois communities.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-[#ff5a00] text-white font-black px-8 py-4 rounded-xl"
          >
            GET A FREE ESTIMATE
          </Link>

        </div>
      </section>

      {/* PAINTING SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#ff5a00] font-black tracking-widest uppercase text-center mb-3">
            Interior Painting Services
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
            PROFESSIONAL INTERIOR PAINTING
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">
                Walls
              </h3>
              <p>
                Professional interior wall painting with careful preparation
                and clean, consistent coverage.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">
                Ceilings
              </h3>
              <p>
                Interior ceiling painting for smooth and textured ceiling
                surfaces.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">
                Trim
              </h3>
              <p>
                Painting for interior trim and other finished details to
                complete the room.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">
                Color Changes
              </h3>
              <p>
                Complete room and living-area color changes to give your
                interior a fresh new look.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">
                Drywall & Paint
              </h3>
              <p>
                Drywall repairs, finishing, priming, and painting completed
                by one contractor from start to finish.
              </p>
            </div>

            <div className="border rounded-2xl p-7">
              <h3 className="text-xl font-black mb-3">
                Remodels & Basements
              </h3>
              <p>
                Interior painting for finished basements, remodels, additions,
                and newly completed drywall.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PREPARATION */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <p className="text-[#ff5a00] font-black tracking-widest uppercase mb-3">
            Quality From Start to Finish
          </p>

          <h2 className="text-3xl md:text-4xl font-black mb-6">
            PROFESSIONAL PREP & CLEAN RESULTS
          </h2>

          <p className="text-lg leading-relaxed">
            A quality paint job starts with proper preparation. Floors and
            surrounding areas are protected before work begins, drywall
            repairs are addressed when needed, surfaces are properly prepared,
            and the job is completed with attention to clean lines and
            consistent coverage.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#03244d] text-white py-16 px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-black mb-4">
          READY TO UPDATE YOUR INTERIOR?
        </h2>

        <p className="text-gray-200 mb-8">
          Contact Top Notch Drywall for a free interior painting estimate in
          Bloomington-Normal and surrounding Central Illinois communities.
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