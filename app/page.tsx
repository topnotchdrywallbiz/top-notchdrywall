export default function Home() {
  const services = [
    {
      title: "Drywall Hanging",
      description:
        "Professional drywall installation for remodels, new construction, basements, ceilings, and more.",
    },
    {
      title: "Drywall Finishing",
      description:
        "Professional taping, coating, sanding, and finishing for clean walls and ceilings.",
    },
    {
      title: "Drywall Repair",
      description:
        "Patches, ceiling repairs, water damage repairs, flood cuts, and texture matching.",
    },
    {
      title: "Texturing",
      description:
        "Stomp, knockdown, light texture, and smooth ceiling finishes.",
    },
    
      {
  title: "Interior Painting",
  description:
    "Professional interior painting for walls, ceilings, trim, remodels, and new construction throughout Bloomington-Normal and Central Illinois.",
},
    {
      title: "Insulation & Small Framing",
      description:
        "Insulation and framing services to complete your drywall project from start to finish."
    },
  ];

  const projects = [
  {
    image: "/images/painting1.jpg",
    title: "Interior Painting",
  },
  {
    image: "/images/install3.jpg",
    title: "Drywall Installation",
  },
  {
    image: "/images/painting2.jpg",
    title: "Custom Striped Accent Wall",
  },
  {
    image: "/images/addition1.jpg",
    title: "Room Addition",
  },
  {
    image: "/images/repair1.jpg",
    title: "Drywall Repair",
  },
  {
    image: "/images/work4.jpg",
    title: "New Construction ",
  },
];

  return (
    <main className="min-h-screen bg-[#ff5a00] text-white">

      {/* HEADER */}
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
      <section id="home" className="bg-[#ff5a00]">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/images/newlogo-orange.jpg"
              alt="Top Notch Drywall"
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div>
            <p className="font-bold tracking-[0.25em] uppercase text-[#03244d] mb-4">
              Professional Drywall & Painting Services
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6">
              QUALITY WORK.
              <span className="block text-[#03244d]">
                TOP NOTCH RESULTS.
              </span>
            </h1>

            <p className="text-xl font-semibold mb-8 max-w-xl">
  Professional drywall hanging, finishing, repair, texturing,
  painting and more throughout Central Illinois and the
  Bloomington–Normal area.
</p>

            <div className="flex flex-wrap gap-4">

              <a
                href="tel:3095316825"
                className="bg-[#03244d] px-7 py-4 rounded-xl font-black text-lg shadow-xl"
              >
                CALL 309-531-6825
              </a>

              <a
                href="#contact"
                className="bg-white text-[#03244d] px-7 py-4 rounded-xl font-black text-lg shadow-xl"
              >
                GET A FREE ESTIMATE
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#03244d] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-[#ff5a00] font-black tracking-widest uppercase">
              What We Do
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-2">
              OUR SERVICES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white text-[#03244d] rounded-2xl p-7 shadow-xl border-b-8 border-[#ff5a00]"
              >
                <h3 className="text-2xl font-black mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* MATERIALS WE USE */}
<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <img
      src="/images/materials-we-use.jpg"
      alt="Professional materials and tools used by Top Notch Drywall"
      className="w-full rounded-2xl shadow-xl"
    />
  </div>
</section>

      {/* OUR WORK */}
      <section id="work" className="bg-[#ff5a00] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-[#03244d] font-black tracking-widest uppercase">
              Recent Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              OUR WORK
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {projects.map((project) => (
              <div
                key={project.image}
                className="bg-[#03244d] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-black">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
{/* SERVICE AREAS */}
<section className="bg-[#03244d] text-white py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <p className="text-[#ff5a00] font-black tracking-widest uppercase mb-3">
      Proudly Serving Central Illinois
    </p>

    <h2 className="text-4xl md:text-5xl font-black mb-6">
      DRYWALL & INTERIOR PAINTING SERVICE AREAS
    </h2>

    <p className="text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
      Top Notch Drywall provides professional drywall hanging, finishing, repairs, texturing, water damage repairs, and interior painting throughout Bloomington, Normal, Pontiac, Mackinaw, Tremont, and surrounding Central Illinois communities.
    </p>

    <div className="flex flex-wrap justify-center gap-3">
      {[
        "Bloomington",
        "Normal",
        "Pontiac",
        "Mackinaw",
        "Tremont",
        "Heyworth",
        "LeRoy",
        "Downs",
        "Hudson",
        "Towanda",
        "Lexington",
        "Carlock",
      ].map((city) => (
        <div
          key={city}
          className="bg-white text-[#03244d] px-6 py-3 rounded-xl font-black border-b-4 border-[#ff5a00]"
        >
          {city}, IL
        </div>
      ))}
    </div>

    <p className="mt-8 text-gray-300">
      Don&apos;t see your town? Contact us about drywall and painting services
      throughout the surrounding Central Illinois area.
    </p>

  </div>
</section>
      {/* ABOUT */}
      {/* ABOUT */}
<section id="about" className="bg-white text-[#03244d] py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-[320px_1fr] gap-12 items-center">

      {/* ILLINOIS GRAPHIC */}
      <div className="flex justify-center">
        <img
          src="/images/illinois.jpg"
          alt="Serving Central Illinois"
          className="w-full max-w-[280px]"
        />
      </div>

      {/* ABOUT TEXT */}
      <div className="text-center md:text-left">

        <p className="text-[#ff5a00] font-black tracking-widest uppercase mb-3">
          Serving Central Illinois
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-6">
          TOP NOTCH DRYWALL
        </h2>

      <p className="mt-8 text-gray-300">
  Top Notch Drywall provides professional drywall installation, drywall repair, drywall finishing, texture, and interior painting services throughout Bloomington-Normal and Central Illinois. Serving homeowners, contractors, remodels, new construction, basements, and water-damage repairs with quality workmanship from start to finish.
</p>

      </div>
    </div>

    {/* QUALITY BOXES */}
    <div className="grid md:grid-cols-3 gap-6 mt-14">

      <div className="bg-[#03244d] text-white rounded-2xl p-7 text-center">
        <div className="text-[#ff5a00] text-3xl font-black mb-2">
          QUALITY
        </div>
        <p>Professional workmanship from start to finish.</p>
      </div>

      <div className="bg-[#03244d] text-white rounded-2xl p-7 text-center">
        <div className="text-[#ff5a00] text-3xl font-black mb-2">
          CLEAN
        </div>
        <p>We respect your home and keep the jobsite clean.</p>
      </div>

      <div className="bg-[#03244d] text-white rounded-2xl p-7 text-center">
        <div className="text-[#ff5a00] text-3xl font-black mb-2">
          RELIABLE
        </div>
        <p>Dependable service and professional communication.</p>
      </div>

    </div>
  </div>
</section>

{/* MEET THE OWNER */}
<section className="bg-[#03244d] text-white py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* OWNER PHOTO */}
      <div>
        <img
          src="/images/aaron-kitchens.jpg"
          alt="Aaron Kitchens, owner of Top Notch Drywall"
          className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover"
        />
      </div>

      {/* OWNER INFO */}
      <div className="text-center md:text-left">

        <p className="text-[#ff5a00] font-black tracking-widest uppercase mb-3">
          Meet The Owner
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-3">
          AARON KITCHENS
        </h2>

        <p className="text-[#ff5a00] text-xl font-bold mb-8">
          Owner of Top Notch Drywall
        </p>

        <div className="text-lg text-gray-200 leading-relaxed space-y-6">
          <p>
            Drywall is more than just a trade to me — it&apos;s a family
            tradition. I&apos;ve grown up around the trade, and I take a lot of
            pride in the quality of work I put my name on.
          </p>

          <p>
            When you hire <strong className="text-white">Top Notch Drywall</strong>,
            you&apos;re hiring me. I personally work on every project, so you
            know who is coming into your home and who is responsible for getting
            the job done right. I believe in quality workmanship, attention to
            detail, and treating every customer&apos;s home with respect.
          </p>

          <p>
            From small repairs and remodels to water-damage restoration and new
            construction, my goal is simple: provide{" "}
            <strong className="text-white">
              quality work and Top Notch results
            </strong>{" "}
            on every job.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


{/* GOOGLE REVIEWS */}
<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-12">
      <p className="text-[#ff5a00] font-black tracking-widest uppercase mb-3">
        What Our Customers Say
      </p>

      <h2 className="text-4xl md:text-5xl font-black text-[#03244d] mb-4">
        GOOGLE REVIEWS
      </h2>

      <div className="text-yellow-500 text-3xl mb-2">
        ★★★★★
      </div>

      <p className="text-gray-600 text-lg font-bold">
        4.6 Google Rating • 22 Reviews
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="border border-gray-200 rounded-2xl p-7 shadow-lg">
        <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
        <p className="text-gray-700 leading-relaxed mb-5">
          &quot;Hired Aaron to patch in drywall around a shower replacement
          and some other bathroom remodeling. Quality work, timely
          communication and job completion. Highly recommend!&quot;
        </p>
        <p className="font-black text-[#03244d]">Jason Landes</p>
        <p className="text-sm text-gray-500">Google Review</p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-7 shadow-lg">
        <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
        <p className="text-gray-700 leading-relaxed mb-5">
          &quot;Aaron responded quickly and was able to take care of it right
          away. He was kind and professional and very reasonably priced. I
          would definitely recommend him and would use him again.&quot;
        </p>
        <p className="font-black text-[#03244d]">Judy Henninger</p>
        <p className="text-sm text-gray-500">Google Review</p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-7 shadow-lg">
        <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
        <p className="text-gray-700 leading-relaxed mb-5">
          &quot;Top Notch was the one most willing to work on my timeline,
          had a competitive price, and did great work. Definitely will keep
          them in my phone for next time.&quot;
        </p>
        <p className="font-black text-[#03244d]">Kyle Johnson</p>
        <p className="text-sm text-gray-500">Google Review</p>
      </div>

    </div>

    <div className="flex flex-wrap justify-center gap-4 mt-10">
      <a
        href="https://maps.google.com/maps?cid=3699437103711695236"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#03244d] text-white px-7 py-4 rounded-xl font-black hover:bg-[#ff5a00] transition"
      >
        READ MORE REVIEWS ON GOOGLE
      </a>

      <a
        href="https://search.google.com/local/writereview?placeid=ChIJazEJ8fxwC4gRhLGiA3IKVzM"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#ff5a00] text-white px-7 py-4 rounded-xl font-black hover:bg-[#03244d] transition"
      >
        LEAVE US A GOOGLE REVIEW
      </a>
    </div>

  </div>
</section>


      {/* CONTACT */}
{/* FREE ESTIMATE */}
<section id="contact" className="bg-[#03244d] py-20">
  <div className="max-w-4xl mx-auto px-6">

    <div className="text-center mb-10">
      <p className="text-[#ff5a00] font-black tracking-widest uppercase">
        Tell Us About Your Project
      </p>

      <h2 className="text-4xl md:text-6xl font-black mt-3 mb-5">
        GET A FREE ESTIMATE
      </h2>

      <p className="text-gray-200 text-lg">
        Fill out the form below and Top Notch Drywall will get back to you
        about your project.
      </p>
    </div>

    <form
      action="https://formsubmit.co/topnotchdrywall.biz@gmail.com"
      method="POST"
      encType="multipart/form-data"
      className="bg-white text-[#03244d] rounded-3xl p-6 md:p-10 shadow-2xl grid md:grid-cols-2 gap-6"
    >

  <input
  type="hidden"
  name="_next"
  value="https://therealtopnotchdrywall.com/thank-you"
/>

<input
  type="hidden"
  name="_subject"
  value="New Estimate Request - Top Notch Drywall"
/>

      <div>
        <label className="font-bold block mb-2">Name *</label>
        <input
          type="text"
          name="Name"
          required
          placeholder="Your name"
          className="w-full border-2 border-gray-300 rounded-xl p-4"
        />
      </div>

      <div>
        <label className="font-bold block mb-2">Phone *</label>
        <input
          type="tel"
          name="Phone"
          required
          placeholder="Your phone number"
          className="w-full border-2 border-gray-300 rounded-xl p-4"
        />
      </div>

      <div>
        <label className="font-bold block mb-2">Email</label>
        <input
          type="email"
          name="Email"
          placeholder="Your email address"
          className="w-full border-2 border-gray-300 rounded-xl p-4"
        />
      </div>

      <div>
        <label className="font-bold block mb-2">Project Address</label>
        <input
          type="text"
          name="Project Address"
          placeholder="City or project address"
          className="w-full border-2 border-gray-300 rounded-xl p-4"
        />
      </div>

      <div className="md:col-span-2">
        <label className="font-bold block mb-2">Type of Work *</label>

        <select
          name="Type of Work"
          required
          className="w-full border-2 border-gray-300 rounded-xl p-4 bg-white"
        >
          <option value="">Select a service</option>
          <option>Drywall Hanging</option>
          <option>Drywall Finishing</option>
          <option>Drywall Repair</option>
          <option>Water Damage Repair</option>
          <option>Texture / Texture Matching</option>
          <option>Interior Painting</option>
          <option>Insulation & Framing</option>
          <option>Other</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="font-bold block mb-2">
          Tell Us About Your Project *
        </label>

        <textarea
          name="Project Details"
          required
          rows={6}
          placeholder="Describe the work you need completed..."
          className="w-full border-2 border-gray-300 rounded-xl p-4"
        />
      </div>

      <div className="md:col-span-2">
        <label className="font-bold block mb-2">
          Upload Photos
        </label>

        <input
          type="file"
          name="attachment"
          accept="image/*"
          className="w-full border-2 border-gray-300 rounded-xl p-4"
        />

        <p className="text-sm text-gray-500 mt-2">
          Add a photo of the area if available.
        </p>
      </div>

      <button
        type="submit"
        className="md:col-span-2 bg-[#ff5a00] text-white py-5 rounded-xl text-xl font-black hover:bg-orange-600 transition"
      >
        SEND ESTIMATE REQUEST
      </button>

      <p className="md:col-span-2 text-center text-sm text-gray-500">
        Prefer to call? 309-531-6825
      </p>

    </form>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-[#03244d] border-t border-[#ff5a00]/40 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="font-black text-xl">
            TOP NOTCH DRYWALL
          </p>

          <p className="text-[#ff5a00] font-bold mt-1">
            QUALITY WORK • TOP NOTCH RESULTS
          </p>

          <p className="text-gray-400 text-sm mt-4">
            © 2026 Top Notch Drywall. All Rights Reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}