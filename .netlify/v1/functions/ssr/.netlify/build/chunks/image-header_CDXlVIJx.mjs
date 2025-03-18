const imageHeader = new Proxy({"src":"/_astro/image-header.DH6aPB4p.jpg","width":1536,"height":1458,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/home/tablet/image-header.jpg";
							}
							
							return target[name];
						}
					});

export { imageHeader as default };
