import React, {Component} from 'react'
import '../index.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import axios from 'axios'
import {Row, Col, Card} from 'react-bootstrap'
import Product from '../components/Product'
import {connect} from 'react-redux'
import {getProducts, setLoading} from '../redux/ProductListReducer'
import './HomeView.css'
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

class HomeView extends Component {
  constructor () {
    super () 

      this.state = {
        products: []
      }
  }

componentDidMount () {
    this.props.setLoading(true)
    axios.get('/api/products') 
    .then( (response) => {
    this.props.getProducts(response.data);
   }).finally(() => this.props.setLoading(false))  
}

render () {
  console.log(this.props)
  return  ( 
    <div>
        <HeroSection />
        <Cards  />
          <div className="products">
            <h1>Latest Products</h1>
              <Row>                
                {this.props.products.filter((product) => 
                  product.cloth_type === "POLOS & T-SHIRTS").map((product) => {
                  console.log(this)
                  console.log(this.props)
                  console.log(this.props.products)
                return(
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}/>
                </Col>
                )})}
            </Row> 
          </div>
        <ImageSlider slides={SliderData} />    
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
const mapDispatchToProps = {
  getProducts: getProducts,
  setLoading: setLoading
}

export default connect (mapStateToProps, mapDispatchToProps) (HomeView);

