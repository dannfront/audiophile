const imageCategoryPagePreview = new Proxy({"src":"/_astro/image-product.L7aUjZlB.jpg","width":1080,"height":1120,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/lilda/OneDrive/Documentos/Audiophile-e-commerce/src/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
							}
							
							return target[name];
						}
					});

export { imageCategoryPagePreview as default };
