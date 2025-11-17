// src/components/Servicios.jsx
import { CheckCircle } from "lucide-react";

export default function Servicios() {
  const servicios = [
    {
      titulo: "Limpieza Dental Profesional",
      descripcion:
        "Eliminación de placa, sarro y manchas para mantener tu salud bucal en óptimas condiciones.",
    },
    {
      titulo: "Ortodoncia y Brackets",
      descripcion:
        "Tratamientos modernos para alinear tus dientes y mejorar tu sonrisa.",
    },
    {
      titulo: "Blanqueamiento Dental",
      descripcion:
        "Resultados visibles desde la primera sesión con tecnología segura y no invasiva.",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Nuestros Servicios
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Ofrecemos una amplia gama de tratamientos dentales para cuidar tu
          sonrisa con la mejor tecnología y especialistas certificados.
        </p>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-blue-600" size={28} />
                <h3 className="text-xl font-semibold text-gray-800">
                  {servicio.titulo}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
