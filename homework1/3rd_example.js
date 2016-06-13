function repeatingLetters(arr) {
	
	var obj = {};
	for(var i = 0; i<arr.length ; i++ ) {
		var temp = arr[i];
		if(obj[temp])
			obj[temp]++;
		else
			obj[temp] = 1;
	}
	console.log(obj);
}


repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']); 
