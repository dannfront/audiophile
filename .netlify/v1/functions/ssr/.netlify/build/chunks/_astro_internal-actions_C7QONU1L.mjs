import '@astrojs/internal-helpers/path';
import { g as getActionQueryString } from './shared_DnyFxl_Q.mjs';
import 'es-module-lexer';
import 'kleur/colors';
import './astro/server_D1AmQk00.mjs';
import 'clsx';
import 'cookie';
import 'html-escaper';
import * as z from 'zod';
import { d as defineAction } from './server_BU54Kvh2.mjs';

const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
async function handleAction(param, path, context) {
  {
    const { getAction } = await import('./server_BU54Kvh2.mjs').then(n => n.b);
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
}
toActionProxy();

const cart = {
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
      const cart2 = JSON.parse(cookies.get("cart")?.value ?? "[]");
      const product = cart2.find((product2) => product2.name === name);
      if (product) {
        product.quantity = quantity;
      } else {
        cart2.push({ name, price, img, quantity, slug, category });
      }
      cookies.set("cart", JSON.stringify(cart2), {
        path: "/"
      });
      return {
        status: "succes"
      };
    }
  }),
  deleteCart: defineAction({
    handler: (_, { cookies, locals }) => {
      cookies.delete("cart", {
        path: "/"
      });
      locals.cart = [];
      return {
        status: "succes"
      };
    }
  })
};

const server = {
  cart
};

export { server };
