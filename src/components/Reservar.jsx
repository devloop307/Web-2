// src/components/Reservar.jsx

export default function Reservar() {
  return (
    <section
      id="reservar"
      className="relative py-24 text-white text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606813907291-26aaad4f86f1?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Agenda tu cita con nosotros
        </h2>

        <p className="text-gray-200 mb-8 leading-relaxed">
          Nuestro equipo está listo para ayudarte a mantener una sonrisa sana y 
          radiante. Reserva fácilmente tu consulta con uno de nuestros especialistas.
        </p>

        {/* Botón CTA */}
        <a
          href="#contacto"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full 
                     font-semibold text-white shadow-lg transition text-lg"
        >
          Reservar ahora
        </a>
      </div>
    </section>
  );
}