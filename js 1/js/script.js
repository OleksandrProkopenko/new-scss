/*завдання 1*/
for (var i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
  
  /*завдання 2*/
function sqr(a, b) {
    var r = a ** b;
    return r;
}
console.log(sqr(2, 3));

 /*завдання 3*/
var b = prompt('введіть число більше 10'); 
	check(b);
	console.log("finish");
function check(a){	
    if(a > 10) {
		return;
    }
    else{
		a = prompt('введіть число більше 10');
		check(a);
    }
}
