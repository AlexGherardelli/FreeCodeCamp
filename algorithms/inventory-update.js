/*
Compare and update the oldItems stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing oldItems item quantities (in arr1). If an item cannot be found, add the new item and quantity into the oldItems array. The returned oldItems array should be in alphabetical order by item.
*/


function updateInventory(arr1, arr2) {
    // All oldItems must be accounted for or you're fired!

    // Convert arr1 into object
    var oldItems = arr1.reduce(function(done, next){
        var key = next[1];
        var value = next[0];
        done[key] = value;
        return done;
    }, {});

    // Convert arr2 into object
    var newItems = arr2.reduce(function(done, next){
        var key = next[1];
        var value = next[0];
        done[key] = value;
        return done;
    },{});


    // Arrays of keys of all new items
    var keys = Object.keys(newItems);

    keys.forEach(function(e){
        // if there is an item in the oldItems
        if(oldItems.hasOwnProperty(e)){
            // updates the oldItems by adding the new quantity to the old one
            var val = oldItems[e];
            oldItems[e] = val + newItems[e];
        }
        else{
            oldItems[e] = newItems[e];
        }
    });

    // Sort oldItems alphabetically
    var inventory = {}
    Object.keys(oldItems).sort().forEach(function(key) {
      inventory[key] = oldItems[key];
    });

    var newInventory = [];

    for(var prop in inventory){
        newInventory.push([inventory[prop], prop.toString()]);
    }
    return  newInventory;
}

// Example oldItems lists
