String.prototype.removeSubstring = function(arg1, b) {
	if (b) {
		var temp = arg1;
		for(var i=1;i<b;i++) {
			arg1 += temp;
		}
	}
	return this.replace(new RegExp(arg1, 'g'), '');
}


var str1 = 'aaa';
var newStr1 = str1.removeSubstring('a', 2);
console.log(newStr1);

var str2 = 'aaabbb';
var newStr2 = str2.removeSubstring('a');
console.log(newStr2);