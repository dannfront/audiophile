import { defineMiddleware } from "astro:middleware";
import type { Product } from "./interface/type";

// `context` y `next` son automáticamente tipados

export const onRequest = defineMiddleware(({ url, cookies, redirect, locals }, next) => {

    locals.cart = JSON.parse(cookies.get("cart")?.value! ?? "[]")

    next()
});