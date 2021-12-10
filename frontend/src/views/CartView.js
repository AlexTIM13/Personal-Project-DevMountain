import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'

class CartView extends Component {
  constructor () {
    super () 

      this.state = {
        cart: []
      }
  }

componentDidMount () {
   axios.get('/api/cart') 
    .then( (response) => {
    this.setState({ cart: response.data });
   }).catch(error => {console.log(error)}) 
  }

checkoutHandler = () => {
    this.props.history.push('/shipping')
  }


render () {
  return  ( 
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
          <ListGroup variant='flush'>
            {this.state.cart.map(item => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.img1} alt={item.name} fluid rounded/>
                  </Col>

                  <Col md={3}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>${item.price}</Col>

                  <Col md={2}>

                    <Form.Control as='select'>

                        {[...Array(item.qty).keys()].map(x => (
                          <option key = { x + 1 } value = {x +1}>
                            {x + 1}
                          </option>
                        ))}
                    </Form.Control>

                  </Col>

                  <Col md={2}>
                    <Button type='button' variant='ligth'>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>        

                </Row>    
              </ListGroup.Item> 
            ))}   
           </ListGroup>   
      </Col>  

      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Subtotal ({this.state.cart.reduce((acc, item) => acc + item.qty, 0)})items</h2>

              ${this.state.cart.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
            </ListGroup.Item>

            <ListGroup.Item>
              <Button type='button' className='btn-block' onClick={this.checkoutHandler}>
                Proced To Checkout
              </Button>

            </ListGroup.Item>

          </ListGroup>
        </Card>
      </Col>                      


    </Row>          
    )
  }     
}

export default CartView