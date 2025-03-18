const imageGallery1 = new Proxy({"src":"/_astro/image-gallery-1.ox7_v5MA.jpg","width":445,"height":280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
							}
							
							return target[name];
						}
					});

export { imageGallery1 as default };
