

function rot13(str){

	str = str.split("");
	var caesar = [];
	for (var i = 0; i < str.length; i++) {
		var code = str[i].charCodeAt();
		if(code > 64 && code < 91)
			caesar.push((str[i].charCodeAt() - 65 + 13) % 26 + 65);
		else
			caesar.push(str[i].charCodeAt());

	}
	str = String.fromCharCode.apply(String, caesar);
	return str;
}


// test cases
rot13("SERR PBQR PNZC"); // FREE CODE CAMP

rot13("SERR CVMMN!") // FREE PIZZA

rot13("SERR YBIR?") // FREE BEER?

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") //"THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."