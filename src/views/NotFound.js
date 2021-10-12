import { Link } from "react-router-dom";
const NotFound = () => {

    return(
        <div className="container">
            <div className="row py-5">
                <div className="col-sm-12 text-center py-5">
                    <h2>No se encontro la pagina.</h2>
                        <Link to="/" className="btn btn-success">Volver al home</Link>
                </div>
            </div>
            
        </div>
    )
};
export default NotFound;