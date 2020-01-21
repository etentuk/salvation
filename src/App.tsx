import React, { createContext, FC, useState  } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import AboutPage from './pages/about/aboutPage';
import ContactPage from './pages/contact/contactPage';
import ProductsPage from './pages/products/productsPage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AdminPage from './pages/admin/admin';
import LoginPage from './pages/login/login';
import ProtectedRoute from './components/protectedRoute';
import CartPage from './pages/order/cart';
import OrderSuccessPage from './pages/order/orderSuccess';
import PaymentPage from './pages/order/payment';

export type Cake = {
  flavour: string,
  size: string,
  color: string,
  totalPrice: number,
}

type State = {
  admin: string | null;
  currentOrders: Cake[];
  paymentFulfilled: boolean;
}

export type ContextProps = {
  state?: State
  setAdmin: (admin: string) => void;
  setPaymentFulfilled?: (paymentFulfilled: boolean) => void;
  setCurrentOrders?: any;
  onDelete?: any;
};

export const Context = createContext<ContextProps>({setAdmin: () => {},setCurrentOrders: () => {}, });

const App: FC = () => {
  const [state, setState] = useState<State>({
    admin: localStorage.getItem('admin'),
    currentOrders: [],
    paymentFulfilled: false,
  });

  return(
    <Context.Provider
      value={{
        state,
        setAdmin: (admin: string) => setState({...state, admin}),
        setPaymentFulfilled: (paymentFulfilled: boolean) => setState({...state, paymentFulfilled}),
        setCurrentOrders: (currentOrder: Cake) => setState({ ...state, currentOrders: [ ...state.currentOrders, currentOrder] }),
        onDelete: (index: number) => setState({...state, currentOrders: [ ...state.currentOrders.filter((order: Cake,indexOfOrder:number) => indexOfOrder !== index)]})
      }}
    >
      <Router>
          <Header/>
          <Switch>
            <Route path="/products" component={ProductsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path='/' component={HomePage} />
            <Context.Consumer>
              {context =>(
                <Switch>
                  <ProtectedRoute
                    component={AdminPage}
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
                    component={OrderSuccessPage}
                    condition={context.state?.currentOrders?.length}
                    path="/checkout"
                    redirectRoute="/products"
                  />
                  <ProtectedRoute
                    component={PaymentPage}
                    condition={true}
                    path="/payment"
                    redirectRoute="/products"
                  />
                </Switch>
                )}
            </Context.Consumer>
          </Switch>
          <Footer/>
      </Router>
    </Context.Provider>
  );
};

export default App;
