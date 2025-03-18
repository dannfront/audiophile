const imageHeader = new Proxy({"src":"/_astro/image-header.CLlMH-ko.jpg","width":750,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/home/mobile/image-header.jpg";
							}
							
							return target[name];
						}
					});

export { imageHeader as default };
