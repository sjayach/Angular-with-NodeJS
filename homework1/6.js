function sumArray(array) {

var count = 0;
   for(var i=0, i < array.length; i++) 
   { 
       if(!isNaN(array[i])) {
      	count += Number(array[i]); 
       }
   }
    console.log(count);
}

sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7]); // 21
