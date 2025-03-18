const imageZx9Speaker = new Proxy({"src":"/_astro/image-zx9-speaker.CcMkeugc.jpg","width":654,"height":240,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/mobile/image-zx9-speaker.jpg";
							}
							
							return target[name];
						}
					});

export { imageZx9Speaker as default };
