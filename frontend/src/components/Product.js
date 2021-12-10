import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = (props) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${props.product.id}`}>
        <Card.Img src={props.product.img1} variant='top'/>
      </Link>

      <Card.Body>
        <Link to={`/product/${props.product.id}`}>
          <Card.Title as='div'>
            <strong>{props.product.name}</strong> 
          </Card.Title>
        </Link>

      <Card.Text as='div'>
        <Rating value={props.product.rating} text={`${props.product.num_reviews} reviews`}/>
      </Card.Text>

      <Card.Text as='h3'>${props.product.price}</Card.Text>

      </Card.Body>
    </Card>
  )
}

export default Product
