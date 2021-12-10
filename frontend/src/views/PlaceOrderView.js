import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Button, Row, Col, ListGroup, Image, Card}  from 'react-bootstrap'
import CheckoutSteps from '../components/CheckoutSteps'

class PlaceOrderView extends Component {
constructor () {
    super () 

      this.state = {
        cart: [],
        orders: [],
        users: []
      }
  }

componentDidMount () {
    axios.get('/api/users') 
    .then( (response) => {
    this.setState({ users: response.data });
   }).catch(error => {console.log(error)}) 
   
   axios.get('/api/cart') 
    .then( (response) => {
    this.setState({ cart: response.data });
   }).catch(error => {console.log(error)}) 

   axios.get('/api/orders') 
    .then( (response) => {
    this.setState({ orders: response.data });
   }).catch(error => {console.log(error)}) 

}


  render() {
    return (
        <>
          <CheckoutSteps step1 step2 step3 step4/>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>

                {this.state.users.map((user) => {
                  return(
                    <ListGroup.Item>
                      <h2>Shipping</h2>
                      <p>
                        <strong>Address:</strong>
                        <br/>
                        {user.adress}
                        <br/>
                        {user.city}
                        <br/>
                        {user.postal_code}
                        <br/>
                        {user.country}
                      </p>
                    
                      <h2>Payment Method</h2>
                      <strong>Method: </strong>
                      {user.payment_type}
                    </ListGroup.Item>
                  )})}

                    <ListGroup.Item>
                      <h2>Order Items</h2>
                      <ListGroup.Item variant='flush'>
                      {this.state.cart.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>

                          <Col md={2}>
                            <Image src={item.img1} alt={item.name} fluid rounded />
                          </Col>

                          <Col>
                            <Link to={`/product/${item.id}`}>
                              {item.name}
                            </Link>
                          </Col>

                          <Col md={4}>
                            {item.qty} x ${item.price} = ${item.qty * item.price}
                          </Col>

                        </Row>
                      </ListGroup.Item> 
                      ))}
                      </ListGroup.Item>
                    </ListGroup.Item>    
              </ListGroup>          
            </Col>

            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
               
                  <ListGroup.Item>
                    <h2>Order Summary</h2>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    {this.state.orders.map((order, index) => (
                        <Row>
                          <Col>Item</Col>
                          <Col>${order.items_price}</Col>
                        </Row>
                    ))}    
                  </ListGroup.Item>
                
                  <ListGroup.Item>
                    {this.state.orders.map((order, index) => (
                        <Row>
                          <Col>Shipping</Col>
                          <Col>${order.shipping_price}</Col>
                        </Row>
                    ))}    
                  </ListGroup.Item>      
                    
                  <ListGroup.Item>
                    {this.state.orders.map((order, index) => (
                        <Row>
                          <Col>Tax</Col>
                          <Col>${order.tax_price}</Col>
                        </Row>
                    ))}      
                  </ListGroup.Item>

                  <ListGroup.Item>
                    {this.state.orders.map((order, index) => (
                        <Row>
                          <Col>Total</Col>
                          <Col>${order.total_price}</Col>
                        </Row>
                    ))}       
                  </ListGroup.Item>  

                  <ListGroup.Item>
                        <Button type='button' className='btn-block'>Place Order</Button>
                  </ListGroup.Item>
              </ListGroup>          
            </Card>
          </Col>            


        </Row>
      </>
        )
      }
    }

export default PlaceOrderView

