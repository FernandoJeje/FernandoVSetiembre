import "./App.css";
import { Link } from "react-router-dom";
// retorno del componente:

function App() {
  return (
    <>
      <Link to={`/usuarios`}>Usu 1</Link>
      <Link to={`/usuarios/:PAIS`}>UsuPais</Link>
    </>
  );
}

export default App;
