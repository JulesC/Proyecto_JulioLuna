import { useState } from "react"

export const CartContext = ( initialState ) =>  {
    const min = 1 , max = 10
    const[counter, setCounter] = useState(initialState)

    const handleIncrement = () => {
        counter < max ? setCounter(prev => prev + 1) : Swal.fire(
            'Información!',
            'Stock máximo permitido',
            'warning'
        )
        //counter < max && setCounter(prev => prev + 1) --> if sin else
    }

    const handleDecrement = () => {
        counter > min ? setCounter(prev => prev - 1) :
            Swal.fire(
                'Información!',
                'Stock mínimo permitido',
                'warning'
            )
        //counter > min ? setCounter(prev => prev - 1) --> if sin else
    }

    const reset = () => {
        counter > min ? setCounter(initialState) : Swal.fire(
            'Error!',
            'Debe existir Stock para vaciar',
            'error'
        )
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        reset
    }
}
