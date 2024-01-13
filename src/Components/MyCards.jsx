import Card from "react-bootstrap/Card";
import Boton from "./Tags";


const MyCard = ({ img, name, desc, color, texto }) => {
  return (
    <>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={img} className="imagen"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Boton color={color} texto={texto} />
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
