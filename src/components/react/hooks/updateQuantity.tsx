import { useState } from 'react'

export default function updateQuantity() {
    const [quantity, setQuantity] = useState(0)

    function addFromCart() {
        setQuantity((quantity) => quantity + 1)
    }
    function removeFromCart() {
        if (quantity === 0) return
        setQuantity((quantity) => quantity - 1)
    }
    return { quantity, setQuantity, addFromCart, removeFromCart }
}
