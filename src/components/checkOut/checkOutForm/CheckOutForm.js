import { useState } from "react";

const CheckOutForm = ({makePayment}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [direction, setDirection] = useState('');

    const handlerSubmit = (ev) => {
        ev.preventDefault();
        const buyerObj = {
            name : name,
            email : email,
            phone: phone,
            direction: direction
        };
        makePayment(buyerObj);
    };

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
                <div className="mb-3 ">
                    <label className="form-label" htmlFor="phone">Teléfono</label>
                    <input type="tel" required  className="form-control" id="phone" name="phone" value={phone} onInput={(e) => setPhone(e.target.value)}/>
                    
                </div>
                <div className="mb-3 ">
                    <label className="form-label" htmlFor="direction">Dirección</label>
                    <input type="tel" required  className="form-control" id="direction" name="direction" value={direction} onInput={(e) => setDirection(e.target.value)}/>
                    
                </div>
               <div className=" d-flex justify-content-end">
                <button type="submit" className="btn btn-lg btn-success">Pagar</button>
               </div>
            </form>
        </>
    )

};

export default CheckOutForm;