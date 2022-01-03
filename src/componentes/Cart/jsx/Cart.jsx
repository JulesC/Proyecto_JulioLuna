import React, { useState } from 'react'
import '../css/Cart.css'
import {CartContext} from './CartContext'

const ItemCount = () => {

  const { counter, handleIncrement, handleDecrement, reset} = CartContext(1)

    return (
    <div className='counter'>
      <h1 className='contador'> {counter} </h1>
      <button className='btn-mayor' onClick={handleIncrement}>+</button>
      <button className='lbl-primary'  onClick={reset}>Vaciar Carrito</button>
      <button className='btn-menor' onClick={handleDecrement}>-</button>
    </div >
  )
}

export default ItemCount