const imageSpeakerZx7 = new Proxy({"src":"/_astro/image-speaker-zx7.EwJriu-G.jpg","width":654,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/home/mobile/image-speaker-zx7.jpg";
							}
							
							return target[name];
						}
					});

export { imageSpeakerZx7 as default };
