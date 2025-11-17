import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const result = await emailjs.send(
        "service_5o7el2e",      // tu Service ID
        "template_raw14uq",    // tu Template ID
        formData,
        "KeNqVN7yFNgc4ThmM"    // tu Public Key
      );

      console.log(result.text);
      setStatus("Mensaje enviado.");

      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      setStatus("Error al enviar ❌");
    }
  };

  return (
    <section
      id="contacto"
      className="relative py-24 bg-gray-50 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        ¡Estamos aquí para ayudarte!
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Si deseas agendar una cita o solicitar información, completa el siguiente formulario.
      </p>

      {/* FORMULARIO MÁS PEQUEÑO */}
      <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-lg border">
        <form onSubmit={sendEmail} className="space-y-5 text-left">
          
          {/* NOMBRE */}
          <div>
            <label className="text-gray-600 font-medium">Nombre</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: María Torres"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-gray-600 font-medium">Correo electrónico</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* ASUNTO */}
          <div>
            <label className="text-gray-600 font-medium">Asunto</label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Motivo del mensaje"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* MENSAJE */}
          <div>
            <label className="text-gray-600 font-medium">Mensaje</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu consulta..."
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* BOTÓN ENVIAR */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* ESTADO DEL ENVÍO */}
        {status && (
          <p className="mt-4 text-sm text-gray-700 text-center">{status}</p>
        )}
      </div>
    </section>
  );
}
