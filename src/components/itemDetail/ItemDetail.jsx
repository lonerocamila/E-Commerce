import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'
function ItemDetail ({product}) {
    const [goCart, setGoCart] = useState(false)
    const { addToCart } = useContext(CartContext)
   
    const onAdd = (quantity) => {
        setGoCart(true);
        addToCart({ ...product, quantity: quantity });
      };
    return(
        <div key={product.id} className='container mt-5'>
           <div className="row justify-content-center text-center align-items-center">
           <div className="col-lg-6 col-md-12 col-sm-12 pb-5">  
                    <img src={product.img} className="itemDetail-img"></img>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h3 className="fw-bold">{product.title}</h3>
                    <h4>${product.price}</h4>
                    <p>{product.description}</p>
         
           {
              !goCart ?  <ItemCount stock={30} initial={1} onAdd={onAdd}/>
              : 
              <div className="d-flex justify-content-center">
                  <Link to={`/cart`}> 
                      <button className="btn btn-danger bg-gradient me-3 mt-3">Ir al carrito</button>
                  </Link>
                  <Link to={`/`}> 
                      <button className="btn btn-danger bg-gradient ms-3 mt-3">Seguir comprando</button>
                  </Link>
              </div>
           }
         </div> 
        
      </div>
      </div>

    )
}

export default ItemDetail
