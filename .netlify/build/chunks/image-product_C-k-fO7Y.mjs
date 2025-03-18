const imageProduct = new Proxy({"src":"/_astro/image-product.Dgb8mwcy.jpg","width":562,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-zx7-speaker/tablet/image-product.jpg";
							}
							
							return target[name];
						}
					});

export { imageProduct as default };
