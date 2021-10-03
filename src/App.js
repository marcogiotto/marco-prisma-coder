import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import Cart from './views/Cart';
import { useState, useEffect } from 'react';
import { CartContextProvider } from './context/CartContext';
import {db} from './services/firebase';
import { collection, query, getDocs } from '@firebase/firestore';



function App() {
      
      const [categories, setCategories] = useState([]);

      useEffect(() => {
            getDocs(collection(db,'Categories')).then((querySnapshot) => {
                  const categories = querySnapshot.docs.map(doc => {
                        return {id: doc.id,...doc.data()};
                  });
                  setCategories(categories);
            })
      },[]);

      return (
      <BrowserRouter> 
            <CartContextProvider> 
            <NavBar categories={categories}/>
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
            <Route path="/category/:categoryId">
                  <Products categories={categories}></Products>
            </Route>
            <Route path="/cart">
                        <Cart></Cart>
            </Route>
            </Switch>
            </main>
            </CartContextProvider> 
      </BrowserRouter>
      );
}

export default App;
