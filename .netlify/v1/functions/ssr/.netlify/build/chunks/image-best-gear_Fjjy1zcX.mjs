const imageBestGear = new Proxy({"src":"/_astro/image-best-gear.tyjakAlM.jpg","width":1378,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/shared/tablet/image-best-gear.jpg";
							}
							
							return target[name];
						}
					});

export { imageBestGear as default };
