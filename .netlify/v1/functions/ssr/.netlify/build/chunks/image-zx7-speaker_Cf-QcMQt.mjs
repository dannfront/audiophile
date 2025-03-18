const imageZx7Speaker = new Proxy({"src":"/_astro/image-zx7-speaker.CIce_7t2.jpg","width":700,"height":636,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/image-zx7-speaker.jpg";
							}
							
							return target[name];
						}
					});

export { imageZx7Speaker as default };
