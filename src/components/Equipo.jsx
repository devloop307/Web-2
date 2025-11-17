// src/components/Equipo.jsx

export default function Equipo() {
  const equipo = [
    {
      nombre: "Dr. Alejandro Ramos",
      rol: "Especialista en Implantes",
      imagen:
        "https://images.unsplash.com/photo-1659353888101-6e53e32515fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      nombre: "Dra. Mariana Díaz",
      rol: "Ortodoncia y Estética Dental",
      imagen:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=401",
    },
    {
      nombre: "Dr. Carlos Medina",
      rol: "Odontología General",
      imagen:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    },
  ];

  return (
    <section id="equipo" className="py-24 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Nuestro Equipo
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Profesionales altamente capacitados y comprometidos con tu salud bucal.
          Contamos con especialistas en diversas áreas odontológicas.
        </p>

        {/* GRID DEL EQUIPO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {equipo.map((doctor, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border text-center"
            >
              {/* IMAGEN */}
              <img
                src={doctor.imagen}
                alt={doctor.nombre}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
              />

              {/* NOMBRE */}
              <h3 className="text-xl font-semibold text-gray-800">
                {doctor.nombre}
              </h3>

              {/* ROL */}
              <p className="text-blue-600 font-medium mt-1">{doctor.rol}</p>

              {/* DESCRIPCIÓN */}
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Con años de experiencia y un enfoque humano, brinda atención
                precisa y personalizada para cada paciente.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
