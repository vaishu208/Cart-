/* import { useCart } from "../context/CartContext";
export default function CartItem({items}){
    const{dispatch}=useCart()
    return(
        <div>
            <div>
                <img> src={item.img} alt={item.name}</img>
            </div>
            <div>
                <div>
                    <i className="bx bx-trash" onClick={()=>dispatch({type:"REMOVE-FROM-CART",payload:item.id})}></i>
                </div>
                <div>
                    <span>Size</span>
                    <span>{item.size}</span>
                </div>
                <div>
                    <span>Color:</span>
                    <span>{item.color}</span>
                </div>
                <div>
                    <h1>${item.price}</h1>
                    <div>
                        <i className="bx bx-minus"onClick={()=>diapatch({type:"DECREMENT",payload:item.id})}></i>
                        <span>{item.quantity}</span>
                        <i className="bx bx-plus" onClick={()=>diapatch({type:"INCREMENT",payload:item.id})}></i>
                    </div>
                </div>

            </div>
        </div>
    )
}*/
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { dispatch } = useCart();

  console.log("items in cart--->", item);
  return (
    <div>
      <div className="flex gap-1">
        <img src={item.img} alt={item.name} />
        <div>
          <div>
            <i
              className="bx bx-trash"
              onClick={() =>
                dispatch({ type: "Remove-From-CART", payload: item.id })
              }
            ></i>
          </div>
          <div>
            <span>Size:</span>
            <span>{item.size}</span>
          </div>
          <div>
            <span>Color:</span>
            <span>{item.color}</span>
          </div>
          <div>
            <h1>${item.price}</h1>
          </div>
          <div>
            <i
              className="bx bx-minus"
              onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
            ></i>
            <span>{item.quantity}</span>
            <i
              className="bx bx-plus"
              onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
