const imageGallery3 = new Proxy({"src":"/_astro/image-gallery-3.D6RWQ8Xq.jpg","width":790,"height":736,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-zx9-speaker/tablet/image-gallery-3.jpg";
							}
							
							return target[name];
						}
					});

export { imageGallery3 as default };
