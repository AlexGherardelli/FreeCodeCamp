
function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  // Here is your change, ma'am.
  // return change;
	function objConstruct(){
		var obj = {}
		var tot = 0;
		for (var i = 0; i < cid.length; i++) {
			obj[cid[i][0]] = cid[i][1];
		}
		var total = Object.values(obj);
		for (var i = 0; i < total.length; i++) {
			tot += total[i];
		}
		obj.total = tot;
		return obj;
	}
	var cash = objConstruct();
	console.log(cid);
	console.log("Total cash in drawer ", cid.total);

	Object.values(cid).forEach(function (params) {
		console.log(params);
	})

	if(change === cid.total){
		console.log({"status": "CLOSED"})
	}
	else if (change > cid.total) {
		console.log({ "status": "INSUFFICIENT FUNDS", "change": [] })
	}
	else{
console.log(change);		
	}
	
}


checkCashRegister(19.5, 20, [
				[
								"PENNY", 0.01
				],
				[
								"NICKEL", 0
				],
				[
								"DIME", 0
				],
				[
								"QUARTER", 0
				],
				[
								"ONE", 0
				],
				[
								"FIVE", 0
				],
				[
								"TEN", 0
				],
				[
								"TWENTY", 0
				],
				["ONE HUNDRED", 0]
])