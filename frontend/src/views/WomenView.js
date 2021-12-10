import React, {Component} from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import Product from '../components/Product'
import {connect} from 'react-redux'

class WomenView extends Component {
  constructor () {
    super () 

      this.state = {
        products: []
      }
  }

render () {
  return  ( 
    <div>
        <h1>Women Latest Products</h1>
          <Row>
            {this.props.products.filter((product) => product.genre === "WOMEN" ).map((product) => {
            console.log(this)  
            console.log(this.props)  
            console.log(this.props.products)  
            console.log(product)
            return(
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
            )})}
        </Row> 
    </div>
    )
  }     
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState)
  return {
    products: reduxState.productList.products,
    loading: reduxState.productList.loading
  }
}

export default connect (mapStateToProps) (WomenView);
