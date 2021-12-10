import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeView from './views/HomeView'
import Product from './views/ProductView'
import WomenView from './views/WomenView'
import AccessoriesView from './views/AccessoriesView'
import MenView from './views/MenView'
import AboutUsView from './views/AboutUsView'
import CartView from './views/CartView'
import LoginView from './views/LoginView'
import ShippingView from './views/ShippingView'
import PaymentView from './views/PaymentView';
import PlaceOrderView from './views/PlaceOrderView';

const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeView} exact/>
          <Route path='/product/:id' component={Product}/>
          <Route path='/women' component={WomenView}/>
          <Route path='/accessories' component={AccessoriesView}/>
          <Route path='/men' component={MenView}/>
          <Route path='/aboutus' component={AboutUsView}/>
          <Route path='/cart/:id?' component={CartView}/>
          <Route path='/login' component={LoginView}/>
          <Route path='/shipping' component={ShippingView}/>
          <Route path='/payment' component={PaymentView}/>
          <Route path='/placeorder' component={PlaceOrderView}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
