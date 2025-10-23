function products(product: product): string {
  return `product [${product.id}]: ${product.name} costs ${product.price}`;
}

type product = { id: number; name: string; price: number; inStock: boolean };
let product1: product = {
  id: 1,
  name: "pen",
  price: 10,
  inStock: true,
};

console.log(products(product1));
