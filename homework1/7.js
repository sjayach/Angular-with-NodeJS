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
totalPaid(groceries, 9.5);