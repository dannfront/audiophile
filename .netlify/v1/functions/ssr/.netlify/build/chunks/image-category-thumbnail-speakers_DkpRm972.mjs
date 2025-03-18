const Speakers = new Proxy({"src":"/_astro/image-category-thumbnail-speakers.BjLeQxia.png","width":438,"height":408,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/image-category-thumbnail-speakers.png";
							}
							
							return target[name];
						}
					});

export { Speakers as default };
