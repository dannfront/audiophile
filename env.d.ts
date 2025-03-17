
interface Cart {
    name: string; price: number; img: string; quantity: number; slug: string; category: string
}

declare namespace App {
    interface Locals {
        cart: Cart[]
    }
}