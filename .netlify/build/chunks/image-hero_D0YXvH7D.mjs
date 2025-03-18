const imageHero = new Proxy({"src":"/_astro/image-hero.D-D3zuPP.jpg","width":1440,"height":729,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/home/desktop/image-hero.jpg";
							}
							
							return target[name];
						}
					});

export { imageHero as default };
