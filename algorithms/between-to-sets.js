function processData(input) {
    //Enter your code here
    var steps = arguments[0].match(/[A-Z]/ig).join('');
    var valley_count = [];
    var elevation = 0;
    for(var i = 0; i < steps.length; i++){
        if(steps[i] == 'U'){
            elevation++;
            valley_count.push(elevation);
            console.log(elevation);
        } else if(steps[i] == "D"){
            elevation--;
            valley_count.push(elevation);
            // if(elevation < 0){
            //     valley_count += 1;
            // }
        }
    }
    console.log(valley_count);
}
processData("12 DDUUDDUDUUUD");
