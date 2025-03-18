const imageZx9Speaker = new Proxy({"src":"/_astro/image-zx9-speaker.B7Ph0K47.jpg","width":446,"height":636,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/tablet/image-zx9-speaker.jpg";
							}
							
							return target[name];
						}
					});

export { imageZx9Speaker as default };
