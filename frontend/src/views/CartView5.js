import React, {Component} from 'react'
import axios from 'axios'

class CartView5 extends Component {
  constructor () {
    super () 

      this.state = {
        products: []
      }
  }

addToCart = () => {
  axios.get(`/api/products/${this.props.match.params.id}`)
  .then((response) => {this.setState({products: response.data})
  }).catch(err => console.log({err}))

}

render () {
  console.log(this.props)
  return  ( 
    <div>Hello World</div>
    )
  }     
}


export default CartView5

