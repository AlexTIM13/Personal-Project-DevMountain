import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'

class CartView2 extends Component {
  constructor () {
    super () 

      this.state = {
        products: []
      }
  }

addToCart = () => {
  // const id = this.props.match.params.id
  // console.log (id)

  axios.get(`/api/products/${this.props.match.params.id}`)
  .then((response) => {this.setState({products: response.data})
  }).catch(err => console.log({err}))

}

render () {
  console.log (this)
  return  ( 
    <div>Cart</div>
    )
  }     
}


export default CartView2


