import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { formatNumber } from '../utils/format'

export default function CardPizza(props) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title><b>Pizza {props.name}</b></Card.Title>
        <Card.Text>
          <p>{props.desc}</p>
          <small><b>🍕 Ingredientes:</b></small>
            <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
              {props.ingredients.map((ing, i) => (
                <li key={i}><i>{ing}</i></li>
              ))}
            </ul>
          <b>Precio: ${formatNumber(props.price)}</b>
        </Card.Text>
        <div className="card-buttons">
        <Button variant="light">Ver más👀</Button>
        <Button variant="dark">Añadir🛒</Button>
        </div>
      </Card.Body>
    </Card>
</>
  )
}
