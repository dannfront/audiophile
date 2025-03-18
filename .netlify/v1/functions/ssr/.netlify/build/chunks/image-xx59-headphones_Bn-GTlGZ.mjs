const imageXx59Headphones = new Proxy({"src":"/_astro/image-xx59-headphones.48nH-y0m.jpg","width":446,"height":636,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/tablet/image-xx59-headphones.jpg";
							}
							
							return target[name];
						}
					});

export { imageXx59Headphones as default };
