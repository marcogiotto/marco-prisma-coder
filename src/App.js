import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import Cart from './views/Cart';
import Message from './components/message/Message';
import CheckOut from './views/CheckOut';
import { useState, useEffect, useContext } from 'react';
import { CartContextProvider } from './context/CartContext';
import MessageContext, { MessageContextProvider } from './context/MessageContext';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import NotFound from './views/NotFound';
import { getCategories } from './services/firebase';

function App() {
      
      const [categories, setCategories] = useState([]);
      const {setMessages} = useContext(MessageContext);

      useEffect(() => {
            getCategories().then(res => {
                  setCategories(res);
            }).catch(error => {
                  setMessages('error',error);
            })
      },[]);// eslint-disable-line react-hooks/exhaustive-deps

      return (
      <BrowserRouter> 
             <MessageContextProvider> 
            <CartContextProvider> 
                
            <NavBar categories={categories}/>
            <Message/>
            <main>
            <Switch>
            <Route exact path="/">
                  <Home></Home>
            </Route>
            <Route path="/products">
                  <Products ></Products>
            </Route>
            <Route path="/product/:id">
                  <ProductDetail></ProductDetail>
            </Route>
            <Route path="/category/:id">
                  <Products categories={categories}></Products>
            </Route>
            <Route path="/cart">
                  <Cart></Cart>
            </Route>
            <PrivateRoute path="/checkout">
                  <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path="*">
                 <NotFound></NotFound>
            </Route>
            </Switch>
            </main>
           
           
            </CartContextProvider> 
            </MessageContextProvider>
      </BrowserRouter>
      );
}

export default App;
