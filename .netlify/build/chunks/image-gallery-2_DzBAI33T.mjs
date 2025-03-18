const imageGallery2 = new Proxy({"src":"/_astro/image-gallery-2.suGA-rGs.jpg","width":654,"height":348,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-zx9-speaker/mobile/image-gallery-2.jpg";
							}
							
							return target[name];
						}
					});

export { imageGallery2 as default };
