const imageProduct = new Proxy({"src":"/_astro/image-product.CgVXX39R.jpg","width":654,"height":654,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-yx1-earphones/mobile/image-product.jpg";
							}
							
							return target[name];
						}
					});

export { imageProduct as default };
