function mutation(arr) {
    var second = arr[1].toLowerCase();
    var first = arr[0].toLowerCase();

    for (var i = 0; i < second.length; i++) {
    	console.log(first.indexOf(second[i]));
    	if(first.indexOf(second[i]) < 0)
   			return false;
    }

    return true;

}

mutation(["Mary", "Aaarmy"]);