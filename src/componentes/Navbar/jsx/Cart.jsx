import React from 'react'
import { useState } from 'react'
import '../css/Cart.css'


function Cart() {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <div>                   
            <i class="fa fa-shopping-cart"> {count} </i> 
            <button className='btn-primary' onClick={handleCount}>Agregar al Carrito</button>
        </div>
    )
}

export default Cart