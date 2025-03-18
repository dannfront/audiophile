const imageZx7Speaker = new Proxy({"src":"/_astro/image-zx7-speaker.LlgeL_eG.jpg","width":654,"height":240,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/mobile/image-zx7-speaker.jpg";
							}
							
							return target[name];
						}
					});

export { imageZx7Speaker as default };
