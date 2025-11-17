export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-700">
          OdontoLife
        </h1>

        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#inicio" className="hover:text-blue-600 transition">Inicio</a>
          <a href="#servicios" className="hover:text-blue-600 transition">Servicios</a>
          <a href="#equipo" className="hover:text-blue-600 transition">Equipo</a>
          <a href="#testimonios" className="hover:text-blue-600 transition">Testimonios</a>
          <a href="#reservar" className="hover:text-blue-600 transition">Reservar</a>
          <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Iniciar Sesión
        </button>
      </div>
    </header>
  );
}
