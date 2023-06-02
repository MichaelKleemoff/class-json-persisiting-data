const { randomProductFactory, createRandomProduct } = require('./products');
const { writeJSONFile, readJSONFile } = require('./helpers');

function run() {
	let products = readJSONFile('./data', 'products.json');
	console.log(products);
	if (process.argv[3]) {
		products.push(...randomProductFactory(process.argv[3]));
	} else {
		products.push(createRandomProduct());
	}
	writeJSONFile('./data', 'products.json', products);
}

run();
