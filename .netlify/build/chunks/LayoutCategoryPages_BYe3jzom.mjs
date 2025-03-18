import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, f as renderComponent, r as renderTemplate, i as renderHead, h as renderSlot, g as renderScript } from './astro/server_D1AmQk00.mjs';
import 'kleur/colors';
import { $ as $$NavBar, a as $$ClientRouter, b as $$BestAudio, c as $$Footer, d as $$MenuMobile, e as $$Cart } from './Cart_Bc42-OVI.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$HeaderCategory = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderCategory;
  const { title = "Audiophile e-commerce website", isTitle = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`bg-[#000] ${isTitle ? " h-[10rem] md:h-[17rem]" : "h-[5rem]"}`, "class")}> ${renderComponent($$result, "NavBar", $$NavBar, { "bgColor": "#000" })} ${isTitle && renderTemplate`<h1 class="text-2xl md:text-[35px] text-end w-fit mx-auto mt-5 md:mt-[4rem] text-white font-bold"> ${title.toUpperCase()} </h1>`} </header>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/shared/HeaderCategory.astro", void 0);

const $$Astro = createAstro();
const $$LayoutCategoryPages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutCategoryPages;
  const {
    title = "Audiophile e-commerce website",
    isTitle = false,
    showBestAudio = true,
    isBgWhite = true
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"><title>${title.toUpperCase()}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute(`${isBgWhite ? "bg-white" : "bg-[#F1F1F1]"} text-[#2D2D2D]`, "class")}> ${renderComponent($$result, "HeaderCategory", $$HeaderCategory, { "title": title, "isTitle": isTitle })} <main class="w-[90%] lg:w-[80%] mx-auto"> <article class="space-y-16 mt-30"> ${renderSlot($$result, $$slots["default"])} </article> </main> ${showBestAudio && renderTemplate`<div class="w-[90%] lg:w-[80%] mx-auto"> ${renderComponent($$result, "BestAudio", $$BestAudio, {})} </div>`} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "MenuMobile", $$MenuMobile, {})} ${renderComponent($$result, "Cart", $$Cart, {})} ${renderScript($$result, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/layouts/LayoutCategoryPages.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/layouts/LayoutCategoryPages.astro", void 0);

export { $$LayoutCategoryPages as $ };
