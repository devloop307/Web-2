// src/pages/PortalClinica.jsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Testimonios from "../components/Testimonios";
import Equipo from "../components/Equipo";
import Reservar from "../components/Reservar";
import Contacto from "../components/Contacto";

export default function PortalClinica() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* 🔝 Navbar */}
      <Navbar />

      {/* 🌟 Secciones principales */}
      <Hero />          {/* id="inicio" */}
      <Servicios />     {/* id="servicios" */}
      <Testimonios />   {/* id="testimonios" */}
      <Equipo />        {/* id="equipo" */}
      <Reservar />      {/* id="reservar" */}
      <Contacto />      {/* id="contacto" */}
    </div>
  );
}
