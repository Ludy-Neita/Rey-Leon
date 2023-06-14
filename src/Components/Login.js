import '../stylesheets/Login.css';
import titulo from "../img/name.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState("");

  const ingresoUsuario = (value) => {
    setUsuario(value);
  }
  //console.log(usuario);

  const [contraseña, setContraseña] = useState("");
  const [contraseñaError, setContraseñaError] = useState(false);

  const ingresoContraseña = (value) => {
    if (value.length < 6) {
      setContraseñaError(true);
    } else {
      setContraseñaError(false);
      setContraseña(value);
    }

  }

  const [isLogin, setIsLogin] = useState(false);
  const [hasError, sethasError] = useState(false);

  const ifMatch = (param) => {
    if (param.usuario.length > 0 && param.contraseña.length > 0) {
      if (param.usuario === "Ludy" && param.contraseña === "123456") {

        const { usuario, contraseña } = param
        let ac = { usuario, contraseña };
        let account = JSON.stringify(ac);
        localStorage.setItem("cuenta", account);
        setIsLogin(true);
        sethasError(false);

        navigate("/Listado")

      } else {
        setIsLogin(false);
        sethasError(true);
      }
    } else {
      setIsLogin(false);
      sethasError(true);
    }
  }

  const verificar = () => {
    let account = { usuario, contraseña }

    if (account) {
      ifMatch(account);
    }
  }

  return (

    <div className="fondo">

      <div className="img-title">

        <img
          src={titulo}
          className="logo"
          alt="logo inicial" />

      </div>

      <div className="contenedor-inicial">

        <h1 className='bienvenido'>¡WELCOME!</h1>

        <label>User:</label>
        <input
          name="usuario"
          placeholder='Write your username'
          type="text"
          onChange={(e) => ingresoUsuario(e.target.value)}>
        </input>


        <label>Password:</label>
        <input
          name="contraseña"
          placeholder='Type your password'
          type="password"
          onChange={(e) => ingresoContraseña(e.target.value)}
          className={contraseñaError ? "input-error" : "input-nomal"}
        >
        </input>

        {contraseñaError &&
          <label className="label-error">
            Password must be more than 6 characters
          </label>
        }

        <button className="boton-ingresar" onClick={verificar}> Enter
        </button>


        {hasError &&
          <label className="error-general">
            ¡The username or password is invalid!!
          </label>
        }
      </div>
    </div>
  )
};
