export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Decorative Glows */}

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4">
          Apexyron Ltd
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight  text-white leading-tight">
          Iterate. Innovate. <br />
          <span className="text-gradient">Impact.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          We build digital foundations that empower your business to scale 
          through smart architecture and intuitive design.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
            View Projects
          </button>
          <button className="bg-white text-blue-600 border border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition">
            Our Stack
          </button>
        </div>
      </div>
    </section>
  );
}