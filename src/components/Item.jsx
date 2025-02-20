import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router'

function Item({ producto }) {
    return (
        <Col md={6} lg={3}>
            <Card>
                <Card.Img variant="top" src={producto.thumbnail} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                        {producto.category}
                    </Card.Text>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Button as={Link} to={`/item/${producto.id}`} variant="dark">Ver más</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Item