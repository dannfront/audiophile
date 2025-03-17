import { actions } from "astro:actions"
import SelectQuantity from "./SelectQuantity"
import updateQuantity from "./hooks/updateQuantity"

interface Props {
    name: string,
    price: number,
    img: string,
    slug: string,
    category: string
}

export default function AddToCart({ name, price, img, slug, category }: Props) {

    const { quantity, setQuantity, addFromCart, removeFromCart } = updateQuantity()

    async function addToCart() {

        if (quantity === 0) return


        const { data, error } = await actions.cart.addCart({ name, price, img, quantity, slug, category })

        if (error) {
            console.log(error);
        }
        setQuantity(0)
    }

    return (
        <div className="w-[100%] md:w-[90%] lg:w-[80%] flex justify-between">


            <SelectQuantity quantity={quantity} removeFromCart={removeFromCart} addFromCart={addFromCart} />

            <button className="w-[160px] bg-[#D87D4A] hover:bg-[#FBAF85] transition-colors  p-3 text-white text-[14px] cursor-pointer" onClick={addToCart}>ADD TO CART</button>
        </div>

    )
}
