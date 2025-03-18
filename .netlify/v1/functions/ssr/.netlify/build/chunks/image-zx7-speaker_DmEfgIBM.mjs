const imageZx7Speaker = new Proxy({"src":"/_astro/image-zx7-speaker.BBpijjoN.jpg","width":446,"height":636,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/tablet/image-zx7-speaker.jpg";
							}
							
							return target[name];
						}
					});

export { imageZx7Speaker as default };
