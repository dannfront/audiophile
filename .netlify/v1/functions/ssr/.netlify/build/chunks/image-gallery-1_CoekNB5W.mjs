const imageGallery1 = new Proxy({"src":"/_astro/image-gallery-1.BNZZyrkP.jpg","width":554,"height":348,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-zx9-speaker/tablet/image-gallery-1.jpg";
							}
							
							return target[name];
						}
					});

export { imageGallery1 as default };
