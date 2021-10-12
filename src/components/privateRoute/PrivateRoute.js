import { useContext } from "react";
import {Route,Redirect} from "react-router-dom";
import CartContext from "../../context/CartContext";
const PrivateRoute = ({children,...rest}) => {
    const {cartItems} = useContext(CartContext);
    return(
        <Route
        {...rest}
        render={({ location }) =>
          cartItems.length > 0 ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/products",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
};

export default PrivateRoute;