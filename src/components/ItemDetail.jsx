import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ItemCount from "./ItemCount"

function ItemDetail({ detail }) {
    return (
        <div className='cartaPersonalizada'>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={detail?.thumbnail} />
                <Card.Body>
                    <Card.Title>{detail?.title}</Card.Title>
                    <Card.Text>{detail?.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Category: {detail?.category}</ListGroup.Item>
                    <ListGroup.Item>${detail?.price}</ListGroup.Item>
                    <ListGroup.Item>Stock: {detail?.stock}</ListGroup.Item>
                    <ItemCount product={detail}/>
                </ListGroup>
                
            </Card>
        </div>
    )
}

export default ItemDetail