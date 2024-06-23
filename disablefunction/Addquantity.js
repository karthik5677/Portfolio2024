import React, { useState } from 'react'
import useDisable from './useDisable';


function Addquantity() {

const[quantity,setQuantity]=useState(1);

const plus = ()=>{setQuantity(quantity+1)}
const minus = ()=>{setQuantity(quantity-1)}
    
const disableminus= useDisable(quantity);








  return (
    <div>
        <button onClick={plus}>+</button>
        <input readOnly value={quantity}></input>
        <button onClick={minus} disabled={disableminus}>-</button>
    </div>
  )
}
;
export default Addquantity;