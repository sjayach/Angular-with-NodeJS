function repeatingLetters(arr)
{
var count = {}, value;
for (var i = 0; i < arr.length; i++) {
    value = arr[i];
    if (typeof count[value] === "undefined") {
        count[value] = 1;
    } else {
        count[value]++;
    }
}

var val, occurence=0;
for (var key in count) {
	if (count[key] > occurence) {
		occurence = count[key];
		val = key;
	}
  //console.log(key, count[key]);
}
console.log('value: ' + val + ', occurences: ' + occurence);

console.log(count);
}


repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']); 
