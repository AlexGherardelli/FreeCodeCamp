
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
	var cid = objConstruct();
	console.log(cid);







}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
