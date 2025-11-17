// src/components/Hero.jsx

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Sonrisas saludables, resultados profesionales
        </h1>

        <p className="text-gray-200 text-lg mb-8 leading-relaxed">
          En OdontoLife brindamos atención dental de calidad con tecnología de
          vanguardia.
        </p>

        <a
          href="#reservar"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white shadow-lg transition-all"
        >
          Reservar cita
        </a>
      </div>
    </section>
  );
}