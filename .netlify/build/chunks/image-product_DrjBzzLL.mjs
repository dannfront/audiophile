const imageProduct = new Proxy({"src":"/_astro/image-product.CThtJp5p.jpg","width":1080,"height":1120,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-zx7-speaker/desktop/image-product.jpg";
							}
							
							return target[name];
						}
					});

export { imageProduct as default };
