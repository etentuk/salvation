import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import AboutPage from './pages/about/aboutPage';
import ContactPage from './pages/contact/contactPage';
import ProductsPage from './pages/products/productsPage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Admin from './pages/admin/admin';
import Login from './pages/login/login';

const App: React.FC = () => {
  return(
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/products" component={ProductsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route exact path='/' component={HomePage} />

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
