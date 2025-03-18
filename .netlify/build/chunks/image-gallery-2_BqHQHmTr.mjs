const imageGallery2 = new Proxy({"src":"/_astro/image-gallery-2.DxryElgw.jpg","width":445,"height":280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
							}
							
							return target[name];
						}
					});

export { imageGallery2 as default };
