import { useState, useContext } from "react";
import MessageContext from "../../../context/MessageContext";
const CheckOutForm = ({makePayment}) => {

    const {setMessages} = useContext(MessageContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [phone, setPhone] = useState('');
    const [direction, setDirection] = useState('');
    
    const handlerSubmit = (ev) => {
        ev.preventDefault();
        if(email === emailConfirmation){
            const buyerObj = {
                name : name,
                email : email,
                phone: phone,
                direction: direction
            };
            makePayment(buyerObj);
        } else{

            setMessages('error','Los mails deben coincidir.');
        }
       
    };

    const formValid = () =>{

        if(email && emailConfirmation && direction && phone && name){
            return false;
        }
        return true;
    }

    return(
        <>
            <form onSubmit={handlerSubmit} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre completo</label>
                    <input type="text"  required  className="form-control" id="name" name="name" value={name} onInput={(e) => setName(e.target.value)} aria-describedby="emailHelp"/>
            
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email"  required className="form-control" name="email" value={email} onInput={(e) => setEmail(e.target.value)} id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Confirmar Email</label>
                    <input type="email"   required className="form-control" name="emailConfirmation" value={emailConfirmation} onInput={(e) => setEmailConfirmation(e.target.value)} id="emailConfirmation"/>
                </div>
                <div className="mb-3 ">
                    <label className="form-label" htmlFor="phone">Teléfono</label>
                    <input type="tel" required  className="form-control" id="phone" name="phone" value={phone} onInput={(e) => setPhone(e.target.value)}/>
                    
                </div>
                <div className="mb-3 ">
                    <label className="form-label" htmlFor="direction">Dirección</label>
                    <input type="text" required  className="form-control" id="direction" name="direction" value={direction} onInput={(e) => setDirection(e.target.value)}/>
                    
                </div>
               <div className=" d-flex justify-content-end">
                <button type="submit" disabled={formValid()} className="btn btn-lg btn-success">Pagar</button>
               </div>
            </form>
        </>
    )

};

export default CheckOutForm;