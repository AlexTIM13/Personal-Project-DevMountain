import React, { Component } from 'react'
import {Form, Button, Col}  from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'


class PaymentView extends Component {



checkoutHandler = () => {
    this.props.history.push('/placeorder')
  }

  render() {
    return (
        <FormContainer>
          <CheckoutSteps step1 step2 step3/>
          <h1>Payment Method</h1>
          <Form>

            <Form.Group>
              <Form.Label as='legend'>Select Method</Form.Label>
        
                <Col>
                  <Form.Check
                    type='radio'
                    label='PayPal or Credit Card'
                    id='PayPal'
                    name='paymentMethod'
                    value=''
                    checked
                ></Form.Check>    
                  <Form.Check
                    type='radio'
                    label='Stripe'
                    id='Stripe'
                    name='paymentMethod'
                    value=''
                ></Form.Check>  
                </Col>
            </Form.Group>

            <Button type='submit' variant='primary' onClick={this.checkoutHandler}>
              Continue
            </Button>

          </Form>
        </FormContainer>
    )
  }
}

export default PaymentView
