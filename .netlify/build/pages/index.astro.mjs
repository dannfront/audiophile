import { c as createComponent, m as maybeRenderHead, e as addAttribute, f as renderComponent, r as renderTemplate, d as createAstro, i as renderHead, h as renderSlot, g as renderScript } from '../chunks/astro/server_D1AmQk00.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { c as $$Picture } from '../chunks/_astro_assets_B0IbaQaf.mjs';
import ImageSpeaker from '../chunks/image-speaker-zx9_wAyIoi_n.mjs';
import { $ as $$NavBar, a as $$ClientRouter, b as $$BestAudio, c as $$Footer, e as $$Cart, d as $$MenuMobile, f as $$Icon } from '../chunks/Cart_Bc42-OVI.mjs';
/* empty css                                 */
import HeadPhones from '../chunks/image-category-thumbnail-headphones_44vRtKqa.mjs';
import Speakers from '../chunks/image-category-thumbnail-speakers_DkpRm972.mjs';
import Earphones from '../chunks/image-category-thumbnail-earphones_HfOpqodb.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$HeaderLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`h-[43rem] md:h-screen lg:h-screen bg-[url(../assets/home/mobile/image-header.jpg)] md:bg-[url(../assets/home/tablet/image-header.jpg)] lg:bg-[url(../assets/home/desktop/image-hero.jpg)] bg-no-repeat bg-cover bg-[center] bg-blend-difference bg-[#101010]`, "class")}> ${renderComponent($$result, "NavBar", $$NavBar, {})} <section class="h-[80%] md:h-[70%] lg:h-[85%] flex justify-center lg:justify-normal items-center lg:pl-30"> <div class="w-[400px] space-y-5"> <h2 class="text-center lg:text-left text-white opacity-50 tracking-[7px]">
NEW PRODUCT
</h2> <h1 class="text-center lg:text-left text-white text-3xl md:text-4xl lg:text-5xl tracking-[2px] font-semibold">
XX99 MARK II HEADPHONES
</h1> <p class="md:text-[18px] lg:text-left text-white text-center opacity-[75%]">
Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
</p> <a class="w-[160px] h-[50px] text-center block bg-[#D87D4A] text-white mx-auto lg:mx-0 p-3 font-semibold" href="/headphones/xx99-mark-two-headphones">SEE PRODUCT</a> </div> </section> </header>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/HeaderLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Audiophile e-commerce website" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "HeaderLayout", $$HeaderLayout, {})} ${renderSlot($$result, $$slots["default"])} <div class="w-[90%] lg:w-[80%] mx-auto"> ${renderComponent($$result, "BestAudio", $$BestAudio, {})} </div> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Cart", $$Cart, {})} ${renderComponent($$result, "MenuMobile", $$MenuMobile, {})} ${renderScript($$result, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$CategoriesList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoriesList;
  const { image, href, title, isSize = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative max-w-[90%] w-[300px] md:w-[200px] lg:w-[30%] h-[130px] lg:h-[170px] text-center bg-[#f1f1f1] rounded-lg mx-auto"> <div${addAttribute(`absolute top-[-25%] left-1/2 -translate-x-1/2 size-[110px] md:size-[100px] lg:size-[140px]`, "class")}> ${renderComponent($$result, "Picture", $$Picture, { "src": image, "alt": title, "loading": "lazy", "quality": 50, "widths": [110, 100, 140], "sizes": `(max-width: 360px) 110px, (max-width: 768px) 100px, (max-width: 1024px) 140px`, "formats": ["avif", "webp", "jpeg", "jpg"] })} </div> <div class="pt-16 lg:pt-20"> <h2 class="font-bold">${title}</h2> <a class="w-[50px] text-sm flex items-center gap-2 mx-auto hover:text-[#D87D4A] transition-all"${addAttribute(`/${href}`, "href")}>SHOP
${renderComponent($$result, "Icon", $$Icon, { "name": "icon-arrow-right", "class": "h-[12px]" })} </a> </div> </section>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/shared/CategoriesList.astro", void 0);

const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    {
      image: HeadPhones,
      title: "HEADPHONES",
      href: "headphones"
    },
    {
      image: Speakers,
      title: "SPEAKERS",
      href: "speakers"
    },
    {
      image: Earphones,
      href: "earphones",
      title: "EARPHONES",
      isSize: true
    }
  ];
  const arrayCategories = categories;
  return renderTemplate`${maybeRenderHead()}<article class="w-[90%] lg:w-[85%] my-30 mx-auto space-y-16 md:space-y-0 md:flex lg:justify-between"> ${arrayCategories.map((category) => renderTemplate`${renderComponent($$result, "CategoriesList", $$CategoriesList, { "title": category.title, "href": category.href, "image": category.image, "isSize": category.isSize })}`)} </article>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/shared/Categories.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Categories", $$Categories, { "data-astro-cid-j7pv25f6": true })}  ${maybeRenderHead()}<main class="w-[90%] lg:w-[80%] mx-auto mt-24 space-y-10" data-astro-cid-j7pv25f6> <article class="h-[38rem] lg:h-[488px] bg-[#D87D4A] bg-[url(../assets/home/desktop/pattern-circles.svg)] bg-no-repeat bg-[length:170%] md:bg-[length:120%] lg:bg-[length:85%] bg-[center_-150px] md:bg-[center_-265px] lg:bg-[right_300px_top_0px] mx-auto rounded-lg p-5 md:p-12 lg:content-end lg:pb-0" data-astro-cid-j7pv25f6> <section class="flex flex-col gap-10 md:gap-10 lg:gap-30 lg:flex-row lg:items-center lg:justify-center" data-astro-cid-j7pv25f6> <div class="w-[172px] md:w-[200px] lg:w-[350px] h-[207px] lg:h-[448px] mx-auto lg:content-end" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Picture", $$Picture, { "src": ImageSpeaker, "widths": [172, 220, 720, 450], "sizes": `(max-width: 360px) 172px, (max-width: 768px) 200px, (max-width: 1024px) 450px, `, "loading": "lazy", "quality": 50, "formats": ["avif", "webp", "jpeg", "jpg"], "alt": "Una descripci\xF3n de mi imagen.", "class": "recorte", "data-astro-cid-j7pv25f6": true })} </div> <div class="space-y-5 md:space-y-7" data-astro-cid-j7pv25f6> <h2 class="text-white text-center lg:text-left font-bold text-2xl md:text-[40px]" data-astro-cid-j7pv25f6>
ZX9 <br data-astro-cid-j7pv25f6> SPEAKER
</h2> <p class="md:text-[17px] text-white text-center lg:text-left md:w-[320px] md:mx-auto" data-astro-cid-j7pv25f6>
Upgrade to premium speakers that are phenomenally built
						to deliver truly remarkable sound.
</p> <a href="/speakers/zx9-speaker" class="max-w-fit text-white text-center bg-black hover:bg-[#4C4C4C] transition-all p-2 md:p-3 block mx-auto lg:mx-0" data-astro-cid-j7pv25f6>SEE PRODUCT</a> </div> </section> </article> <article${addAttribute(`h-[320px] bg-[url(../assets/home/mobile/image-speaker-zx7.jpg)] md:bg-[url(../assets/home/tablet/image-speaker-zx7.jpg)] lg:bg-[url(../assets/home/desktop/image-speaker-zx7.jpg)] bg-center bg-no-repeat bg-cover mx-auto p-10 md:p-16 lg:p-20 content-center rounded-lg`, "class")} data-astro-cid-j7pv25f6> <section class="space-y-5" data-astro-cid-j7pv25f6> <h2 class="text-black text-2xl md:text-[35px] font-bold" data-astro-cid-j7pv25f6>
ZX7 SPEAKER
</h2> <a href="/speakers/zx7-speaker" class="w-fit block border-2 border-black hover:bg-black hover:text-white p-2 transition-all" data-astro-cid-j7pv25f6>SEE PRODUCT</a> </section> </article> <article class="" data-astro-cid-j7pv25f6> <section class="flex flex-col gap-5 md:flex-row md:justify-between lg:justify-between" data-astro-cid-j7pv25f6> <div class="md:w-[520px] lg:w-[520px] h-[200px] md:h-[320px] bg-[url(../assets/home/mobile/image-earphones-yx1.jpg)] md:bg-[url(../assets/home/tablet/image-earphones-yx1.jpg)] lg:bg-[url(../assets/home/desktop/image-earphones-yx1.jpg)] bg-no-repeat bg-cover bg-center rounded-lg" data-astro-cid-j7pv25f6></div> <div class="md:w-[520px] h-[200px] md:h-[320px] lg:w-[520px] bg-[#f1f1f1] rounded-lg content-center space-y-5 pl-7 lg:pl-20" data-astro-cid-j7pv25f6> <h2 class="w-fit text-2xl md:text-[35px] font-bold" data-astro-cid-j7pv25f6>
YX1 EARPHONES
</h2> <a class="w-fit block border-2 border-black hover:bg-black hover:text-white p-2 transition-all" href="/earphones/yx1-earphones" data-astro-cid-j7pv25f6>SEE PRODUCT</a> </div> </section> </article> </main> ` })} `;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/pages/index.astro", void 0);

const $$file = "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
