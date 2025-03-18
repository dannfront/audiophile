const imageProduct = new Proxy({"src":"/_astro/image-product.D2CvwEOm.jpg","width":654,"height":654,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-xx59-headphones/mobile/image-product.jpg";
							}
							
							return target[name];
						}
					});

export { imageProduct as default };
