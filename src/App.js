import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from "./Components/Detail";
import Listado from "./Components/Listado";
import Login from "./Components/Login";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Listado" element={<Listado />}/>
      <Route path="/Detalles/:nombre/:img2/:animal/:tipo/:descripcion/:personalidad" element={<Detail />}/>
    </Routes>
  );
}

export default App;
