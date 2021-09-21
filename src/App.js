import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import Cart from './views/Cart';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
const categories = [
    {id: 1, name: "Hombres"},
    {id: 2, name: "Mujeres"},
]


function App() {
  const [cart,setCart] = useState([]);


  return (
    <BrowserRouter> 
      <CartContext.Provider value={cart}> 
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
        </CartContext.Provider> 
    </BrowserRouter>
  );
}

export default App;
