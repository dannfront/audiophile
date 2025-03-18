const imageBestGear = new Proxy({"src":"/_astro/image-best-gear.VgYs-enj.jpg","width":540,"height":588,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/desktop/image-best-gear.jpg";
							}
							
							return target[name];
						}
					});

export { imageBestGear as default };
