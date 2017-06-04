// if any of the arguments is not a number, return undefined
// if arguments are 2, return sum between the two
// if arguments is 1, return a function that uses that number and expect another one (to add it);



function addTogether() {

	args = Array.from(arguments);

	var isNum = args.every(function(n){
		return typeof(n) === "number";
	});
	if(arguments.length === 2 && isNum){
		return args.reduce(function(a, b){
			return a + b;
		});
	}
	else if(arguments.length === 1 && isNum){
		a = args[0];
		return function(b){
			if(typeof(b) === "number"){
				return a + b;
			}
		}
	}
	else{
		return undefined;
	}
}


addTogether(2)([3])