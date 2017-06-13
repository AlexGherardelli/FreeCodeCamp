/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    var oldItems = arr1.reduce(function(done, next){
        var key = next[1];
        var value = next[0];
        done[key] = value;
        return done;
    }, {});

    var newItems = arr2.reduce(function(done, next){
        var key = next[1];
        var value = next[0];
        done[key] = value;
        return done;
    },{});

    console.log(oldItems);
    console.log(newItems);


    // var obj = Object.assign(oldItems, newItems;




}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);