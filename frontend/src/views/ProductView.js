import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import {connect} from 'react-redux'

class ProductView extends Component {
  constructor () {
    super ()

    this.state = {
      product: [],
      qty: '1',
    }
  }

handleChange = (event) => {
  this.setState({qty: event.target.value})
}

addToCartHandler = () => {
  this.props.history.push(`/cart/${this.props.match.params.id}?qty=${this.state.qty}`)
}


render () {
  console.log(this)
  const product = this.props.product.find((product) => product.id === +this.props.match.params.id ) || {}
  return (
    <>
       <Link className='bt btn-ligth my-3' to='/'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.img1} alt={product.name} fluid/>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>

            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating 
                value={product.rating} 
                text={`${product.num_reviews} reviews`}/>
            </ListGroup.Item>

            <br />

            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>

            <br />

            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>

            <br />

            <ListGroup.Item>
              Item Code: {product.sku}
            </ListGroup.Item>

            <br />

            <ListGroup.Item>
              Available Size: {product.size}
            </ListGroup.Item>

            <br />

            <ListGroup.Item>
              Colour: {product.colour}
            </ListGroup.Item>

            <br />

            <ListGroup.Item>
              Composition: {product.composition}
            </ListGroup.Item>




          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>

              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${product.price}</strong></Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.quantity > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>

              {product.quantity > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control as='select' value={this.state.qty} onChange={this.handleChange}>

                        {[...Array(product.quantity).keys()].map(x => (
                          <option key = { x + 1 } value = {x +1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>  
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button 
                  onClick={this.addToCartHandler}
                  className='btn-block' 
                  type='button'
                  disable={product.countInStock === 0} 
                  >Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

      </Row>  
    </>
  )
}
}  

// Reducer
const mapStateToProps = (reduxState) => {
  console.log(reduxState)
  return {
    product: reduxState.productList.products,
    loading: reduxState.productList.loading
  }
}

export default connect(mapStateToProps) (ProductView);

