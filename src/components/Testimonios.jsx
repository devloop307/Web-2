// src/components/Testimonios.jsx

export default function Testimonios() {
  const testimonios = [
    {
      nombre: "María Torres",
      opinion:
        "Excelente atención desde el primer momento. El personal es amable y profesional. Mi sonrisa cambió por completo.",
      imagen: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
    },
    {
      nombre: "Luis Fernández",
      opinion:
        "Tenía miedo al dentista, pero aquí me hicieron sentir seguro. Los resultados del tratamiento fueron increíbles.",
      imagen: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
    },
    {
      nombre: "Carolina Ríos",
      opinion:
        "Servicio de primera y tecnología moderna. Mi blanqueamiento quedó impecable. ¡Super recomendados!",
      imagen: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
  ];

  const renderStars = (count) => {
    return (
      <div className="flex justify-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < count ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonios" className="py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Lo que dicen nuestros pacientes
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          La experiencia de nuestros pacientes es nuestra mejor presentación.
          Aquí algunas opiniones reales de quienes confiaron su sonrisa con nosotros.
        </p>

        {/* GRID DE TESTIMONIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center border"
            >
              {/* IMAGEN */}
              <img
                src={testimonio.imagen}
                alt={testimonio.nombre}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
              />

              {/* ESTRELLAS */}
              {renderStars(testimonio.rating)}

              {/* OPINIÓN */}
              <p className="text-gray-700 italic mb-4">
                “{testimonio.opinion}”
              </p>

              {/* NOMBRE */}
              <h3 className="text-blue-600 font-semibold text-lg">
                {testimonio.nombre}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
