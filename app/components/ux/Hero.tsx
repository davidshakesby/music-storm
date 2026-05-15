export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
      aria-label="Music Storm hero section"
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center text-white">
        <div className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-200">
          Discover the Best New Pop Punk Music
        </div>

        <h1 className="caudex-bold max-w-4xl text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl md:text-6xl">
         Your new favourite band starts here.
        </h1>

        {/* <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg md:mt-8 md:text-xl">
          where new music hits first
        </p> */}

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2">
            Join the Storm
          </button>
        </div>
      </div>
    </section>
  )
}