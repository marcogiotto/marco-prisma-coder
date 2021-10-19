import './NavBar.css';
import { useContext, useEffect,useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import CartWidget from './cartWidget/CartWidget';
import CartContext from '../../context/CartContext';
/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = ({categories}) => {

    const {getTotalItems} = useContext(CartContext);
    const [cartItemsCount,setCartItemsCount] = useState(0);
    
    useEffect(() => {
        setCartItemsCount(getTotalItems());

    },[getTotalItems]); 

    return (
       <header >
           <div className="container">
                
                <Link className="logo" to="/"><h1>PRISMA</h1></Link>
                <nav className="navbar navbar-expand-lg navbar-dark me-lg-5">
               
                       <button className="navbar-toggler ms-auto me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                       </button>
                       <div className="collapse navbar-collapse " id="navbarNavDropdown">
                       <ul className="navbar-nav ms-auto">
                           <li className="nav-item">
                           <NavLink className="nav-link" exact activeClassName="active" aria-current="page" to="/">Home</NavLink>
                           </li>
                           <li className="nav-item">
                           <NavLink className="nav-link" exact activeClassName="active" aria-current="page" to="/products">Productos</NavLink>
                           </li>
                           <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="#"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Categorías
                           </a> 
                           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                               {categories.map(item => <li key={item.key} ><Link  className="dropdown-item" to={`/category/${item.key}`}>{item.description}</Link></li>)}
                               
                           </ul>
                           </li> 
                           
                          
                       </ul>
                       </div>
                      
                   
               </nav>
               <CartWidget cartItems={cartItemsCount}/>
              
                </div>
       </header>
    )
}

export default NavBar;