const imageGallery3 = new Proxy({"src":"/_astro/image-gallery-3.Dhy6xsaJ.jpg","width":635,"height":592,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-zx7-speaker/desktop/image-gallery-3.jpg";
							}
							
							return target[name];
						}
					});

export { imageGallery3 as default };
