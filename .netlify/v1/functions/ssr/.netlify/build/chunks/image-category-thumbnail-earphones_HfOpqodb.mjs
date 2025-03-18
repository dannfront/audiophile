const Earphones = new Proxy({"src":"/_astro/image-category-thumbnail-earphones.Bb5M5Owd.png","width":438,"height":380,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/image-category-thumbnail-earphones.png";
							}
							
							return target[name];
						}
					});

export { Earphones as default };
