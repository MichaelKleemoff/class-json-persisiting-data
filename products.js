const { faker } = require('@faker-js/faker');
// if you want to see the `faker` module/object
// console.log(faker);

// Create a random `product`
function createRandomProduct() {
	const product = {
		_id: faker.datatype.uuid(),
		name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
		description: faker.commerce.productDescription(),
		brand: faker.company.name(),
		price: faker.commerce.price(10, 200, 2, '$'),
		currency: 'USD',
		inStock: faker.datatype.boolean(),
		attributes: {
			material: faker.commerce.productMaterial(),
			color: faker.vehicle.color(),
		},
	};

	return product;
}

// console.log(createRandomProduct());

// Create multiple random `products` based on inputted value
function randomProductFactory(number) {
	const products = [];

	for (let i = 0; i < number; i++) {
		products.push(createRandomProduct());
	}

	return products;
}

// console.log(randomProductFactory(5));

module.exports = {
	createRandomProduct,
	randomProductFactory,
};
