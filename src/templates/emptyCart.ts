
import { numberFormatUSD } from "../services/numberFormat.ts"

function emptyCart(cart: []) {
    const template = `
    <div id="container-summary">
        <div class="flex justify-between items-center">
            <h3 class="bg-white font-bold">CART (${cart.length})</h3>
            ${cart.length > 0 ? `
                <button
                    id="remove-all"
                    class="border-b border-opacity opacity-50 cursor-pointer"
                    type="button">Remove all</button>
            ` : ''}
        </div>
    
        ${cart.length === 0 ? `
            <div class="mt-5 text-center">
                <p class="text-gray-500">Your cart is empty</p>
            </div>
        ` : `
            <ul class="mt-5 space-y-5">
                ${cart.map((item: any) => `
                    <li>${item.name} - ${numberFormatUSD(item.price)}</li>
                `).join("")}
            </ul>
    
            <div class="flex justify-between items-center mt-5">
                <h4 class="font-bold">TOTAL</h4>
                <p class="font-bold">
                    ${numberFormatUSD(cart.reduce((acc: number, item: any) => acc + item.price, 0))}
                </p>
            </div>
    
            <a
                class="block text-center text-white rounded-lg p-3 bg-[#D87D4A] mt-5"
                href="/checkout">CHECKOUT</a>
        `}
    </div>
    `;

    return template
}

export default emptyCart