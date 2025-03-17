import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const cart = {
    addCart: defineAction({
        input: z.object({
            name: z.string(),
            price: z.number(),
            img: z.string(),
            quantity: z.number(),
            slug: z.string(),
            category: z.string()
        }),
        handler: ({ name, price, img, quantity, slug, category }, { cookies }) => {

            const cart = JSON.parse(cookies.get("cart")?.value ?? "[]") as Cart[]

            const product = cart.find(product => product.name === name) as Cart

            if (product) {
                product.quantity = quantity
            } else {
                cart.push({ name, price, img, quantity, slug, category })
            }
            cookies.set("cart", JSON.stringify(cart), {
                path: "/"
            })


            return {
                status: "succes"
            }

        }
    }),
    deleteCart: defineAction({
        handler: (_, { cookies, locals }) => {

            cookies.delete("cart", {
                path: "/"
            })
            locals.cart = []

            return {
                status: "succes"
            }
        }
    })
}