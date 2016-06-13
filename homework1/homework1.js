// 1.

function isPalindrome(arg) {
  var palindrome = true;
  for ( var i = 0; i < arg.length; i++) {
    if (arg[i] !== arg[(arg.length - 1) - i]) {
      console.log('false');
      return;
    }
  }
   
  console.log('true');
}

console.log("1.\n");
isPalindrome('kayak');
isPalindrome('cook');
console.log("------------------------------------------")


// 2.
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

console.log("\n2.\n");
replaceLetters("parallel"); // para**el
replaceLetters("muhaaa"); // muh***
console.log("------------------------------------------")

// 3. 
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

console.log("\n3.\n");
repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']); 
console.log("------------------------------------------")


// 4.
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(array);
}
console.log("\n4.\n");
shuffleArray([1, 2, 3, 4, 5]);
console.log("------------------------------------------")


// 5.


function calculate(arg1, arg2, arg3) {
	var result = arg1+' '+arg3+' '+arg2;
	console.log(result, '=', eval(result));
}

console.log("\n5.\n");
calculate(2, 8, '-'); // 2 - 8 = -6
calculate(2, 8, '+'); // 2 + 8 = 10
calculate(2, 8, '*'); // 2 * 8 = 16
calculate(2, 8, '/'); // 2 / 8 = 0.25
console.log("------------------------------------------")


// 6.
function sumArray(array) {

var count = 0;
   for(var i=0;i < array.length; i++) 
   { 
       if(!isNaN(array[i])) {
      	count += Number(array[i]); 
       }
   }
    console.log(count);
}
console.log("\n6.\n");
sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7]); // 21
console.log("------------------------------------------")


// 7.
function totalPaid(arg, tax) {
	var total = 0;
	for (var i = 0 ; i <arg.length; i++) {
		arg[i].price = (arg[i].price + (arg[i].price*(tax/100))).toFixed(2);
		total += Number(arg[i].price);
		arg[i].paid = arg[i]['price'];
		delete arg[i].price;
	}
	var output = { total : total.toFixed(2), groceries: arg };
	console.log(output);
}



var groceries = [
  { name: 'Orange Juice', price: 2.00 },
  { name: 'Milk', price: 3.50 },
  { name: 'Cereal', price: 2.00 },
  { name: 'Sugar', price: 1.75 }
];
console.log("\n7.\n");
totalPaid(groceries, 9.5);
console.log("------------------------------------------")

