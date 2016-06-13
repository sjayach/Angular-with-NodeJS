function replaceLetters(arg) {
	var lastOccurence = '';
	var outputString = "";
	for(var i = 0 ; i < arg.length;i++) {
		if (lastOccurence === arg[i]) {
			outputString = outputString.substring(0, i-1) + '*' +outputString.substring(i);
			outputString += '*';
		}
		else
			outputString += arg[i];
		lastOccurence = arg[i];
	}
	console.log(outputString);
}



replaceLetters("parallel"); // para**el
replaceLetters("muhaaa"); // muh***