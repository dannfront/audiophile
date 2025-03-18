import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, r as renderTemplate, f as renderComponent, g as renderScript } from '../chunks/astro/server_D1AmQk00.mjs';
import 'kleur/colors';
import 'clsx';
import { n as numberFormatUSD } from '../chunks/numberFormat_dW-0_sdP.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_B0IbaQaf.mjs';
import { $ as $$LayoutCategoryPages } from '../chunks/LayoutCategoryPages_BYe3jzom.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$InputsForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$InputsForm;
  const {
    label,
    placeHolder,
    type = "text",
    className = "w-full md:w-[309px] md:h-[56px]"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label class="font-bold"${addAttribute(label, "for")}>${label}</label> <input${addAttribute(`${className} block border rounded-lg border-[#CFCFCF] p-2`, "class")}${addAttribute(type, "type")} required${addAttribute(label, "id")}${addAttribute(placeHolder, "placeholder")}> </div>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/InputsForm.astro", void 0);

const $$Astro$1 = createAstro();
const $$SumarryItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SumarryItems;
  const { item } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"../assets/product-xx59-headphones/mobile/image-product.jpg": () => import('../chunks/image-product_CiVx4Gox.mjs'),"../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg": () => import('../chunks/image-product_kdF8orYM.mjs'),"../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg": () => import('../chunks/image-product_DYBp58l3.mjs'),"../assets/product-yx1-earphones/mobile/image-product.jpg": () => import('../chunks/image-product_B592mQLM.mjs'),"../assets/product-zx7-speaker/mobile/image-product.jpg": () => import('../chunks/image-product_Chx0fh72.mjs'),"../assets/product-zx9-speaker/mobile/image-product.jpg": () => import('../chunks/image-product_DlL5kHj1.mjs')

});
  const srcImg = `../${item.img.split("/").slice(1).join("/")}`;
  return renderTemplate`${maybeRenderHead()}<li class="flex justify-between items-center gap-5"> <div class="flex items-center gap-2"> <div class="w-[64px] h-[64px]"> ${renderComponent($$result, "Image", $$Image, { "src": images[srcImg](), "quality": 50, "alt": item.name, "class": "rounded-lg w-[64px] h-[64px] object-cover" })} </div> <div> <h4 class="font-bold text-[14px]">${item.name.split(" ").at(0)}</h4> <p class="text-[14px]">${numberFormatUSD(item.price)}</p> </div> </div> <div> <p class="opacity-50 text-[14px]">x${item.quantity}</p> </div> </li>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/SumarryItems.astro", void 0);

const $$Astro = createAstro();
const $$Checkout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkout;
  const cart = Array.isArray(Astro2.locals.cart) ? Astro2.locals.cart : [];
  return renderTemplate`<!-- //todo -->${renderComponent($$result, "LayoutCategoryPages", $$LayoutCategoryPages, { "showBestAudio": false, "title": "CHECKOUT", "isBgWhite": false, "data-astro-cid-ojox7d5b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:flex lg:justify-between lg:gap-10 lg:mb-10" data-astro-cid-ojox7d5b> <form id="form" class="bg-white rounded-lg p-5" action="" data-astro-cid-ojox7d5b> <h1 class="font-bold text-2xl" data-astro-cid-ojox7d5b>CHECKOUT</h1> <div class="space-y-5 mt-5" data-astro-cid-ojox7d5b> <h2 class="text-[#D87D4A]" data-astro-cid-ojox7d5b>Billing Details</h2> <div class="space-y-5 md:flex md:flex-wrap md:gap-5" data-astro-cid-ojox7d5b> ${renderComponent($$result2, "InputsForm", $$InputsForm, { "type": "text", "placeHolder": "Alexei Ward", "label": "Name", "data-astro-cid-ojox7d5b": true })} ${renderComponent($$result2, "InputsForm", $$InputsForm, { "type": "email", "placeHolder": "alexei@mail.com", "label": "Email Address", "data-astro-cid-ojox7d5b": true })} ${renderComponent($$result2, "InputsForm", $$InputsForm, { "type": "tel", "placeHolder": "+1 202-555-0136", "label": "Phone Number", "data-astro-cid-ojox7d5b": true })} </div> </div> <div class="mt-10 space-y-5" data-astro-cid-ojox7d5b> <h2 class="text-[#D87D4A]" data-astro-cid-ojox7d5b>Shipping Info</h2> ${renderComponent($$result2, "InputsForm", $$InputsForm, { "type": "text", "placeHolder": "1137 Williams Avenue", "label": "Your Address", "className": "w-full md:w-full", "data-astro-cid-ojox7d5b": true })} <div class="space-y-5 md:flex md:flex-wrap md:gap-5" data-astro-cid-ojox7d5b> ${renderComponent($$result2, "InputsForm", $$InputsForm, { "type": "text", "placeHolder": "10001", "label": "Zip Code", "data-astro-cid-ojox7d5b": true })} ${renderComponent($$result2, "InputsForm", $$InputsForm, { "type": "text", "placeHolder": "New York", "label": "City", "data-astro-cid-ojox7d5b": true })} ${renderComponent($$result2, "InputsForm", $$InputsForm, { "type": "text", "placeHolder": "United States", "label": "Country", "data-astro-cid-ojox7d5b": true })} </div> </div> <div class="mt-10" data-astro-cid-ojox7d5b> <h2 class="text-[#D87D4A]" data-astro-cid-ojox7d5b>Payment Details</h2> <div class="space-y-5 md:flex md:justify-between md:gap-5" data-astro-cid-ojox7d5b> <h3 class="font-bold" data-astro-cid-ojox7d5b>Payment Method</h3> <div class="space-y-2" data-astro-cid-ojox7d5b> <div class="flex items-center flex-row-reverse justify-end border border-[#D87D4A] rounded-lg gap-5 p-3" data-astro-cid-ojox7d5b> <label for="e-money" class="font-bold" data-astro-cid-ojox7d5b>e-Money</label> <input type="radio" name="paymentMethod" id="e-money" value="e-money" required data-astro-cid-ojox7d5b> </div> <div class="flex items-center flex-row-reverse justify-end border border-[#D87D4A] rounded-lg gap-5 p-3" data-astro-cid-ojox7d5b> <label for="cash-on-delivery" class="font-bold" data-astro-cid-ojox7d5b>Cash on Delivery</label> <input type="radio" name="paymentMethod" id="cash-on-delivery" value="cash-on-delivery" required data-astro-cid-ojox7d5b> </div> </div> </div> <div class="space-y-5 mt-5 md:flex md:flex-wrap md:gap-5" data-astro-cid-ojox7d5b> ${renderComponent($$result2, "InputsForm", $$InputsForm, { "type": "text", "placeHolder": "238521993", "label": "e-Money Number", "data-astro-cid-ojox7d5b": true })} ${renderComponent($$result2, "InputsForm", $$InputsForm, { "type": "text", "placeHolder": "6891", "label": "e-Money PIN", "data-astro-cid-ojox7d5b": true })} </div> </div> </form> <section class="bg-white rounded-lg p-5 my-5 lg:my-0 lgmt-0 lg:h-fit" data-astro-cid-ojox7d5b> <h3 class="font-bold text-2xl" data-astro-cid-ojox7d5b>Summary</h3> <ul class="mt-5 space-y-5" data-astro-cid-ojox7d5b> ${cart.map((item) => {
    return renderTemplate`${renderComponent($$result2, "SumarryItems", $$SumarryItems, { "item": item, "data-astro-cid-ojox7d5b": true })}`;
  })} </ul> <div class="flex justify-between items-center mt-5" data-astro-cid-ojox7d5b> <p data-astro-cid-ojox7d5b>TOATL</p> <p class="font-bold text-2xl" data-astro-cid-ojox7d5b> ${numberFormatUSD(
    cart.reduce(
      (acc, item) => acc += item.price * item.quantity,
      0
    )
  )} </p> </div> <button id="checkout" class="w-full text-white bg-[#D87D4A] p-2 cursor-pointer mt-5" type="submit" form="form" data-astro-cid-ojox7d5b>CONTINUE & PAY</button> </section> </div> ` })} ${renderScript($$result, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/pages/checkout.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/pages/checkout.astro", void 0);

const $$file = "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/pages/checkout.astro";
const $$url = "/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Checkout,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
