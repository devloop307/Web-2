import { useState } from "react";
import Login from "./components/Login";
import PortalClinica from "./pages/PortalClinica";

export default function App() {
  const [logueado, setLogueado] = useState(false);

  return (
    <>
      {logueado ? (
        <PortalClinica />
      ) : (
        <Login onLogin={() => setLogueado(true)} />
      )}
    </>
  );
}
