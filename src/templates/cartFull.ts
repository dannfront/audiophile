import { numberFormatUSD } from "../services/numberFormat.ts"

function cartFull(cart: []) {

    //headphones/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg



    const template = `
<div id="container-summary">
    <div class="flex justify-between items-center">
        <h3 class="bg-white font-bold">CART (${cart.length})</h3>
        ${cart.length > 0 ? `
            <button
                class="remove-all border-b border-opacity opacity-50 cursor-pointer"
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
                <li class="flex justify-between items-center gap-5">
                    <div class="flex items-center gap-2">
                        <div class="w-[64px] h-[64px]">
                            <img 
                                src="${item.img.split("/").slice(2).join("/")}" 
                                alt="${item.name}"
                                onerror="this.src='https://img.freepik.com/vector-gratis/nina-feliz-mariposa_1450-103.jpg'"
                                class="rounded-lg w-[64px] h-[64px] object-cover"
                            />
                        </div>
                        <div>
                            <h4 class="font-bold text-[14px]">${item.name.split(" ")[0]}</h4>
                            <p class="text-[14px]">${numberFormatUSD(item.price)}</p>
                        </div>
                    </div>
                    <div>
                        <p class="opacity-50 text-[14px]">x${item.quantity}</p>
                    </div>
                </li>
            `).join("")}
        </ul>

        <div class="flex justify-between items-center mt-5">
            <h4 class="font-bold">TOTAL</h4>
            <p class="font-bold">
                ${numberFormatUSD(cart.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0))}
            </p>
        </div>

        <a
            class="block text-center text-white rounded-lg p-3 bg-[#D87D4A] hover:bg-[#FBAF85] transition-colors mt-5"
            href="/checkout">CHECKOUT</a>
    `}
</div>
`;
    return template
}
export default cartFull;