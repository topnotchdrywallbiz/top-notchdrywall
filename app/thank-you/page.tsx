export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#ff5a00] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#03244d] text-white rounded-3xl p-10 md:p-14 text-center shadow-2xl">

        <div className="text-[#ff5a00] text-6xl mb-5">✓</div>

        <h1 className="text-4xl md:text-5xl font-black mb-5">
          THANK YOU!
        </h1>

        <p className="text-xl mb-3">
          Your estimate request has been sent.
        </p>

        <p className="text-gray-300 mb-8">
          Top Notch Drywall will review your project information and get back
          to you soon.
        </p>

        <a
          href="/"
          className="inline-block bg-[#ff5a00] text-white px-8 py-4 rounded-xl font-black text-lg"
        >
          RETURN TO HOME
        </a>

        <p className="mt-8 text-gray-300">
          Need to reach us sooner?
        </p>

        <a
          href="tel:3095316825"
          className="text-[#ff5a00] text-2xl font-black"
        >
          309-531-6825
        </a>

      </div>
    </main>
  );
}