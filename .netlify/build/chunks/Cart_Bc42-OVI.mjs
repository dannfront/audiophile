import { c as createComponent, d as createAstro, e as addAttribute, g as renderScript, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, f as renderComponent, j as Fragment, u as unescapeHTML } from './astro/server_D1AmQk00.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import { c as $$Picture, $ as $$Image } from './_astro_assets_B0IbaQaf.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';

const $$Astro$3 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/node_modules/astro/components/ClientRouter.astro", void 0);

const LogoAudiophile = new Proxy({"src":"/_astro/logo.CpUtp9eK.svg","width":143,"height":25,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/logo.svg";
							}
							
							return target[name];
						}
					});

const IconFacebook = new Proxy({"src":"/_astro/icon-facebook.C2bazF0K.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/icon-facebook.svg";
							}
							
							return target[name];
						}
					});

const IconInstagram = new Proxy({"src":"/_astro/icon-instagram.71vOe-dk.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/icon-instagram.svg";
							}
							
							return target[name];
						}
					});

const IconTwitter = new Proxy({"src":"/_astro/icon-twitter.RWdaKxOu.svg","width":24,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/icon-twitter.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#101010] p-6 md:p-16 lg:p-26 grid grid-rows-[auto_auto_auto_auto] gap-5 lg:grid-cols-[auto_auto_auto]"> <img class="mx-auto md:mx-0 lg:align-self-center"${addAttribute(LogoAudiophile.src, "src")} alt="logo-audiophile"> <ul${addAttribute(`lg:h-[20px] flex flex-col items-center gap-5 md:flex-row md:gap-5 lg:col-start-2 lg:col-end-4 lg:justify-between`, "class")}> <li class="text-white text-sm font-medium"> <a class="hover:text-[#D87D4A] transition-colors" href="/" data-astro-prefetch>HOME</a> </li> <li class="text-white text-sm font-medium"> <a class="hover:text-[#D87D4A] transition-colors" href="/headphones" data-astro-prefetch>HEADPHONES</a> </li> <li class="text-white text-sm font-medium"> <a class="hover:text-[#D87D4A] transition-colors" href="/speakers" data-astro-prefetch>SPEAKERS</a> </li> <li class="text-white text-sm font-medium"> <a class="hover:text-[#D87D4A] transition-colors" href="/earphones" data-astro-prefetch>EARPHONES</a> </li> </ul> <p class="text-white opacity-[50%] text-justify lg:w-[500px]">
Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
</p> <p class="text-white text-center opacity-[50%] md:text-base md:text-start lg:row-start-3">
Copyright 2021. All Rights Reserved
</p> <div class="h-[27px] flex justify-center md:justify-normal gap-3 lg:col-start-3 lg:justify-self-end lg:self-end"> <img class="size-5"${addAttribute(IconFacebook.src, "src")} alt="icon-facebook"> <img class="size-5"${addAttribute(IconTwitter.src, "src")} alt="icon-twitter"> <img class="size-5"${addAttribute(IconInstagram.src, "src")} alt="icon-instagram"> </div> </footer>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/shared/Footer.astro", void 0);

const $$BestAudio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto my-30 space-y-7 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center"> <div class="h-[300px] lg:w-[540px] lg:h-[588px] bg-[url(../assets/shared/mobile/image-best-gear.jpg)] md:bg-[url(../assets/shared/tablet/image-best-gear.jpg)] lg:bg-[url(../assets/shared/desktop/image-best-gear.jpg)] bg-center bg-cover bg-no-repeat rounded-lg"></div> <div class="space-y-3 lg:w-[445px] lg:h-[295px]"> <h2 class="font-bold text-2xl md:text-[35px] text-center lg:text-left">
BRINGING YOU THE <br class="block md:hidden lg:block"> <span class="text-[#D87D4A]">BEST</span> <br class="hidden md:block lg:hidden"> AUDIO GEAR
</h2> <p class="text-center lg:text-justify w-[85%] md:w-[90%] mx-auto lg:mx-0 md:text-[17px] opacity-50">
Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
</p> </div> </section>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/shared/BestAudio.astro", void 0);

const IconCart = new Proxy({"src":"/_astro/icon-cart.Byye4yj1.svg","width":23,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/icon-cart.svg";
							}
							
							return target[name];
						}
					});

const icons = {"local":{"prefix":"local","lastModified":1742256655,"icons":{"icon-arrow-right":{"body":"<path fill=\"none\" stroke=\"#D87D4A\" stroke-width=\"2\" d=\"m1.322 1 5 5-5 5\"/>","width":8,"height":12},"menu-hamburger":{"body":"<path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M4 17h16M4 12h16M4 7h16\"/>","width":24,"height":24}}}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$1 = createAstro();
const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavBar;
  const { bgColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`flex items-center md:gap-10 lg:gap-0 lg:justify-between lg:w-full h-[80px] bg-[${bgColor ? bgColor : "#101010"}] py-7 px-10 lg:px-30`, "class")} data-astro-cid-irknx6eh> ${renderComponent($$result, "Icon", $$Icon, { "name": "menu-hamburger", "class": "size-7 lg:hidden", "id": "menu", "cursor": "pointer", "data-astro-cid-irknx6eh": true })} <div class="flex items-center justify-between w-full" data-astro-cid-irknx6eh> <div class="mx-auto md:m-0 md:pt-0" data-astro-cid-irknx6eh> <a href="/" data-astro-cid-irknx6eh> ${renderComponent($$result, "Picture", $$Picture, { "src": LogoAudiophile, "alt": "logo", "quality": 50, "data-astro-cid-irknx6eh": true })} </a> </div> <ul${addAttribute(`hidden lg:w-[400px] lg:flex lg:justify-between`, "class")} data-astro-cid-irknx6eh> <li class="text-white font-medium" data-astro-cid-irknx6eh> <a class="hover:text-[#D87D4A] transition-colors" href="/" data-astro-cid-irknx6eh>HOME</a> </li> <li class="text-white font-medium" data-astro-cid-irknx6eh> <a class="hover:text-[#D87D4A] transition-colors" href="/headphones" data-astro-cid-irknx6eh>HEADPHONES</a> </li> <li class="text-white font-medium" data-astro-cid-irknx6eh> <a class="hover:text-[#D87D4A] transition-colors" href="/speakers" data-astro-cid-irknx6eh>SPEAKERS</a> </li> <li class="text-white font-medium" data-astro-cid-irknx6eh> <a class="hover:text-[#D87D4A] transition-colors" href="/earphones" data-astro-cid-irknx6eh>EARPHONES</a> </li> </ul> ${renderComponent($$result, "Image", $$Image, { "id": "cart", "quality": 50, "src": IconCart, "alt": "icon-cart", "class": "cursor-pointer", "data-astro-cid-irknx6eh": true })} </div> </nav> <div class="md:w-[95%] lg:w-[85%] border-b border-opacity mx-auto" data-astro-cid-irknx6eh></div> `;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/shared/NavBar.astro", void 0);

const $$Overlay = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden fixed w-full h-screen top-0 bg-black opacity-50 overlay-menu overlay-cart"></div>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/Overlay.astro", void 0);

const $$MenuMobile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Overlay", $$Overlay, {})} ${maybeRenderHead()}<nav id="nav-menu" class="hidden fixed top-0 h-screen bg-black w-[70%]"> <ul class="flex flex-col items-center justify-center h-full space-y-10"> <li> <a href="/" class="text-[#fff] font-bold text-2xl">HOME</a> </li> <li> <a href="/headphones" class="text-[#fff] font-bold text-2xl">HEADPHONES</a> </li> <li> <a href="/speakers" class="text-[#fff] font-bold text-2xl">SPEAKERS</a> </li> <li> <a href="/earphones" class="text-[#fff] font-bold text-2xl">EARPHONES</a> </li> </ul> </nav>`;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/shared/MenuMobile.astro", void 0);

const $$Astro = createAstro();
const $$Cart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cart;
  Astro2.locals.cart;
  return renderTemplate`${renderComponent($$result, "Overlay", $$Overlay, { "data-astro-cid-zv32liu4": true })} ${maybeRenderHead()}<section id="cart-summary" class="hidden w-[90%] md:w-[377px] h-fit fixed top-5 right-5 bg-white p-5 rounded-lg" data-astro-cid-zv32liu4></section> ${renderScript($$result, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/shared/Cart.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/components/shared/Cart.astro", void 0);

export { $$NavBar as $, $$ClientRouter as a, $$BestAudio as b, $$Footer as c, $$MenuMobile as d, $$Cart as e, $$Icon as f };
