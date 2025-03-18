const imageSpeakerZx7 = new Proxy({"src":"/_astro/image-speaker-zx7.DQMhQ_Rm.jpg","width":1110,"height":320,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/home/desktop/image-speaker-zx7.jpg";
							}
							
							return target[name];
						}
					});

export { imageSpeakerZx7 as default };
