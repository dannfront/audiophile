const imageGallery3 = new Proxy({"src":"/_astro/image-gallery-3.BtPFyPAI.jpg","width":790,"height":736,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
							}
							
							return target[name];
						}
					});

export { imageGallery3 as default };
