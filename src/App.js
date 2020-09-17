import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';


// CSS
import './data/css/style.css';
import './data/css/responsive.css';
import './data/plugins/bootstrap-4.0.0-dist/css/bootstrap.min.css';
import './data/fonts/oswald.css';

// Javascript
import './data/scripts/main.js';

// Pages
import Home from './pages/home';
import Menu from './pages/menu';
import TotalOrder from './pages/total-order';
import Contact from './pages/contact-us';
import Product from './pages/product';
import FileNotFound from './pages/404-file-not-found';
import ProductForm from './components/productForm';
import ProductForm2 from './components/productForm2';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/total-order" component={TotalOrder} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/product" component={Product} />

          <Route exact path="/product/add" component={ProductForm2} />
          <Route exact path="/product/edit/:id" component={ProductForm2} />
          <Route component={FileNotFound} />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;
