export default function ModernBusinessWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/topnotchlogooo.jpg"
              alt="Top Notch Drywall Logo"
              className="w-14 h-14 rounded-xl object-cover"
            />
            <h1 className="text-2xl font-bold tracking-tight text-orange-500">Top Notch Drywall</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
          <button className="bg-orange-500 text-white px-5 py-2 rounded-2xl hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-orange-500"
      >
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-orange-300 mb-4">
              Professional Drywall & Finishing Services
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Top-Quality Drywall Work You Can Trust
            </h2>
            <p className="text-orange-300 text-xl font-semibold mb-4 tracking-wide">
              We Are The Real Top Notch Drywall — Serving Central Illinois
            </p>
            <p className="text-2xl font-bold text-orange-400 mb-6 tracking-wide">
              Quality Work. Top Notch Results.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Professional drywall installation, finishing, repairs, and remodeling services for residential and commercial properties.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl hover:bg-orange-600 transition">
                Our Services
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-white transition">
                Contact Us
              </button>
            </div>
          </div>

          <div className="bg-black/70 rounded-3xl shadow-2xl p-8 border border-orange-500/20 text-white">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Drywall Installation</h3>
                <p className="text-gray-300">
                  Professional drywall hanging and installation completed with precision and attention to detail.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Taping & Finishing</h3>
                <p className="text-gray-300">
                  Expert taping, mudding, sanding, and finishing for smooth flawless walls and ceilings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Drywall Repair</h3>
                <p className="text-gray-300">
                  Reliable drywall repair, painting, and water damage restoration for residential and commercial properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">About Top Notch Drywall</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Top Notch Drywall is a family-owned company proudly serving Central Illinois with professional drywall repair, hanging, finishing, painting, water damage repair, and remodeling services. We focus on quality workmanship, reliability, and clean professional results for every project.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you need drywall installation for new construction, repairs after water damage, or complete remodeling services, our experienced team is committed to delivering top-quality results you can trust.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-orange-500 rounded-3xl p-8 text-center shadow-xl border border-orange-300">
              <h4 className="text-4xl font-bold mb-2">30+</h4>
              <p className="text-gray-300">Years Combined Experience</p>
            </div>
            <div className="bg-orange-500 rounded-3xl p-8 text-center shadow-xl border border-orange-300">
              <h4 className="text-4xl font-bold mb-2">250+</h4>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-orange-500 rounded-3xl p-8 text-center shadow-xl border border-orange-300">
              <h4 className="text-4xl font-bold mb-2">98%</h4>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="bg-orange-500 rounded-3xl p-8 text-center shadow-xl border border-orange-300">
              <h4 className="text-4xl font-bold mb-2">100%</h4>
              <p className="text-gray-300">Professional Workmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Professional drywall services tailored for residential and commercial projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Drywall Installation',
                description: 'Professional drywall installation services for homes, remodels, and commercial projects.',
              },
              {
                title: 'Taping & Finishing',
                description: 'Clean taping, mudding, sanding, and finishing work with top-quality craftsmanship.',
              },
              {
                title: 'Drywall Repair',
                description: 'Drywall repair, patching, and water damage restoration done quickly and professionally.',
              },
              {
                title: 'Interior & Exterior Painting',
                description: 'Professional interior and exterior painting services that deliver clean finishes and long-lasting results.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-orange-500/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500 mb-6" />
                <h4 className="text-2xl font-semibold mb-4">{service.title}</h4>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Our Work</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Check out some of our recent drywall, finishing, painting, and remodeling projects from across Central Illinois.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: '/images/work5.jpg',
                title: 'Garage Ceiling Water Damage Repair',
                description: 'Professional drywall finishing and texture work completed with clean detailed results.',
              },
              {
                image: '/images/work2.jpg',
                title: 'New Construction Drywall',
                description: 'Complete drywall installation for a new residential construction project.',
              },
              {
                image: '/images/work3.jpg',
                title: 'Interior Drywall Finishing',
                description: 'Smooth drywall finishing and preparation ready for final paint and trim.',
              },
              {
                image: '/images/work4.jpg',
                title: 'Vaulted Ceiling Project',
                description: 'Detailed drywall work on vaulted ceilings and custom interior spaces.',
              },
              {
                image: '/images/customwall.jpg',
                title: 'Custom Drywall Work',
                description: 'Professional drywall installation and finishing with high-quality craftsmanship.',
              },
            ].map((project, item) => (
              <div
                key={item}
                className="bg-gray-950 border border-orange-500/20 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 text-lg">
              Contact Top Notch Drywall today for a free estimate on your next drywall or remodeling project.
            </p>
          </div>

          <div className="bg-orange-500 rounded-3xl p-10 shadow-2xl border border-orange-400">
            <form className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-2xl border border-orange-300 bg-black text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-2xl border border-orange-300 bg-black text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Company"
                className="p-4 rounded-2xl border border-orange-300 bg-black text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white md:col-span-2"
              />
              <textarea
                placeholder="Tell us about your project"
                rows="6"
                className="p-4 rounded-2xl border border-orange-300 bg-black text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white md:col-span-2"
              />
              <button className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-900 transition md:col-span-2 font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">
            © 2026 Top Notch Drywall. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
