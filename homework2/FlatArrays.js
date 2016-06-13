function flattenArray(a, b) {
	return a.concat(b);
}

Array.prototype.flattenArray = function() {
	return this.reduce(flattenArray);
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.flattenArray());