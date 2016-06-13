

function calculate(arg1, arg2, arg3) {
	var result = arg1+' '+arg3+' '+arg2;
	console.log(result, '=', eval(result));
}


calculate(2, 8, '-'); // 2 - 8 = -6
calculate(2, 8, '+'); // 2 + 8 = 10
calculate(2, 8, '*'); // 2 * 8 = 16
calculate(2, 8, '/'); // 2 / 8 = 0.25
