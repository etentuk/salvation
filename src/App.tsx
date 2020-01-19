import React, { createContext, FC, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import AboutPage from './pages/about/aboutPage';
import ContactPage from './pages/contact/contactPage';
import ProductsPage from './pages/products/productsPage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Admin from './pages/admin/admin';
import Login from './pages/login/login';
import ProtectedRoute from './components/protectedRoute';
import CartPage from './pages/order/cart';
import CheckOutPage from './pages/order/checkOut';
import PaymentPage from './pages/order/payment';

export type Cake = {
  flavour: string,
  size: string,
  color: string,
  totalPrice: number,
}

type ContextProps = {
  state:{
    admin: any;
    currentOrders: Cake[];
    addressFormComplete: boolean;
  }
  setAdmin: any;
  setAddressFormComplete: any;
  setCurrentOrders: any;
  onDelete: any;
};

export const Context = createContext<Partial<ContextProps>>({});

const App: FC = () => {
  const [state, setState]: any = useState<any>({
    admin: localStorage.getItem('admin'),
    currentOrders: [],
    addressFormComplete: false,
  });

  return(
    <Context.Provider
      value={{
        state,
        setAdmin: (admin: string) => setState({...state, admin}),
        setAddressFormComplete: (addressFormComplete: boolean) => setState({...state, addressFormComplete}),
        setCurrentOrders: (currentOrder: Cake) => setState({ ...state, currentOrders: [ ...state.currentOrders, currentOrder] }),
        onDelete: (index: number) => setState({...state, currentOrders: [ ...state.currentOrders.filter((order: Cake,indexOfOrder:number) => indexOfOrder !== index)]})
      }}
    >
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route path="/products" component={ProductsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={Login} />
            <Route exact path='/' component={HomePage} />
            <Context.Consumer>
              {context =>(
                <Switch>
                  <ProtectedRoute
                    component={Admin}
                    condition={localStorage.getItem('admin')}
                    path="/admin"
                    redirectRoute="/login"
                  />
                  <ProtectedRoute
                    component={CartPage}
                    condition={context.state?.currentOrders?.length}
                    path="/cart"
                    redirectRoute="/products"
                  />
                  <ProtectedRoute
                    component={CheckOutPage}
                    condition={context.state?.currentOrders?.length}
                    path="/cart"
                    redirectRoute="/products"
                  />
                  <ProtectedRoute
                    component={PaymentPage}
                    condition={context.state?.currentOrders?.length}
                    path="/payment"
                    redirectRoute="/products"
                  />
                </Switch>
                )}
            </Context.Consumer>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </Context.Provider>
  );
};

export default App;
