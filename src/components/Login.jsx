import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validEmail = "pierosancas@gmail.com";
  const validPassword = "123456789";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      onLogin(true);
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          OdontoLife Dental Center
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-600 font-medium">Correo</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium">Contraseña</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-white rounded-lg font-semibold"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
