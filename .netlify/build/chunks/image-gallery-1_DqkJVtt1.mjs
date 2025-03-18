const imageGallery1 = new Proxy({"src":"/_astro/image-gallery-1.DHe23N_Y.jpg","width":554,"height":348,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-yx1-earphones/tablet/image-gallery-1.jpg";
							}
							
							return target[name];
						}
					});

export { imageGallery1 as default };
