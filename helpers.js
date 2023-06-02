// Here we will write our File System Reading and Writing Functionality

const { readFileSync, writeFileSync } = require('node:fs');
// console.log('The `fs` module --> ', fs);
// console.log('Keys of fs --> ', Object.keys(fs));

// readFileSync(`pathToTheFile`, `howToReadTheFile`) - read our `.json` files.
// const path = './data';
// const fileName = 'products.json';

// const collection = readFileSync(`./${path}/${fileName}`, 'utf-8');

// condition ? trueAction : falseAction;
// const resultOfTernary = collection ? JSON.parse(collection) : [];

// console.log('Data from JSON file we are reading: ', resultOfTernary);

function readJSONFile(path, fileName) {
	const collection = readFileSync(`${path}/${fileName}`, 'utf-8');

	// Is it an empty JSON file or not
	return collection ? JSON.parse(collection) : [];
}

// `writeFileSync()` - write our `.json` files
function writeJSONFile(path, fileName, data) {
	data = JSON.stringify(data);

	return writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' });
}

module.exports = {
	readJSONFile,
	writeJSONFile,
};
