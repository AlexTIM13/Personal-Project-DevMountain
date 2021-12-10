import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col}  from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

class LoginView extends Component {



  render() {
    return (
      <div>
        <FormContainer>
          <h1>Sign In</h1>
          <Form>
            <Form.Group >
              <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value=''
              ></Form.Control>  
            </Form.Group> 

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value=''
              ></Form.Control>  
            </Form.Group> 

            <Button type='submit' variant='primary'>
              Sign In
            </Button>
          </Form> 

          <Row className='py-3'>
            <Col>
              New Customer?{' '}
              <Link to=''>Register</Link>
            </Col>
          </Row>
        </FormContainer>    
      </div>
    )
  }
}

export default LoginView
