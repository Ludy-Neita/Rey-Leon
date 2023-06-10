import '../stylesheets/Detail.css'
import { useParams, useNavigate } from 'react-router-dom';

export default function Detail() {

  let { nombre } = useParams();
  let { img2 } = useParams();
  let { animal } = useParams();
  let { tipo } = useParams();
  let { descripcion } = useParams();
  let { personalidad } = useParams();

  const navigate = useNavigate();

  return (
    <div>

      <div className="contenedor-por-character">

        <h1 className="title-character"> {nombre} </h1>

        <div className="character">

          <img
            className="img-character"
            src={require(`../img/${img2}.png`)}
            alt="Imagen del Character" />

          <table lassName='descripcion-character' border="1">

            <tr>
              <td>Animal</td>
              <td className="datos">{animal} </td>
            </tr>
            <tr>
              <td>Tipo</td>
              <td className="datos">{tipo}</td>
            </tr>
            <tr>
              <td>Descripcion</td>
              <td className="datos">{descripcion} </td>
            </tr>
            <tr>
              <td>Personalidad</td>
              <td className="datos">{personalidad}</td>
            </tr>
          </table>
        </div>

      </div>

      <button onClick={() => navigate("/Listado")}> Back </button>
      
    </div>
  );

}