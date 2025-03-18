const imageXx59Headphones = new Proxy({"src":"/_astro/image-xx59-headphones.BtJT0rOL.jpg","width":700,"height":636,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/image-xx59-headphones.jpg";
							}
							
							return target[name];
						}
					});

export { imageXx59Headphones as default };
