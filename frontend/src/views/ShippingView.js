import React, { Component } from 'react'
import {Form, Button}  from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'


class ShippingView extends Component {


checkoutHandler = () => {
    this.props.history.push('/payment')
  }
  
  render() {
    return (
      <FormContainer>
          <CheckoutSteps step1 step2/>
          <h1>Shipping</h1>
        <Form>

          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter address'
              value=''
              // required
            ></Form.Control>  
          </Form.Group> 

          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter city'
              value=''
              // required
            ></Form.Control>  
          </Form.Group> 

          <Form.Group>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter postal code'
              value=''
              // required
            ></Form.Control>  
          </Form.Group> 

          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter country'
              value=''
              // required
            ></Form.Control>  
          </Form.Group>

          <Button type='submit' variant='primary' onClick={this.checkoutHandler}>
            Continue
          </Button>
        </Form>

      </FormContainer>
    )
  }
}

export default ShippingView

