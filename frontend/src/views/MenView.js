import React, {Component} from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import Product from '../components/Product'
import {connect} from 'react-redux'

class MenView extends Component {
  constructor () {
    super () 

      this.state = {
        products: []
      }
  }

render () {
  return  ( 
    <div>
        <h1>Men Latest Products</h1>
          <Row>
            {this.props.products.filter((product) => product.genre === "MEN" ).map((product) =>  { 
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

export default connect (mapStateToProps) (MenView);

