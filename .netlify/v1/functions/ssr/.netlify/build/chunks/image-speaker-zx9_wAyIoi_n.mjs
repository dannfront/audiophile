const ImageSpeaker = new Proxy({"src":"/_astro/image-speaker-zx9.CcSDY8BF.png","width":756,"height":918,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/home/desktop/image-speaker-zx9.png";
							}
							
							return target[name];
						}
					});

export { ImageSpeaker as default };
