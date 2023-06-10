import '../stylesheets/Item.css'
import { Link } from 'react-router-dom';

export default function Item(props) {

  return (

    <Link to={"/detalles/" + props.name + "/" + props.img2 + "/" + props.animal + "/" + props.tipo + "/" + props.descripcion + "/" + props.personalidad}>

      <div className="contenedor-characters-grande">

        <p className="nombreCharacter">{props.name}</p>

        <img
          className="img-characteres"
          src={require(`../img/${props.img}.png`)}
          alt="Imagen del Character" />
      </div>

    </Link>
  );
}