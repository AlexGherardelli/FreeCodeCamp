var Person = function(firstAndLast) {
		var name = firstAndLast.split(" ")[0];
		var surname = firstAndLast.split(" ")[1];
		var fullname = name + " " + surname;

    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return fullname;
    };

		this.getFirstName = function(){
			return name;
		};
		this.getLastName = function(){
			return surname;
		};

		this.setFirstName = function(first){
			name = first;
			fullname = name + " " + surname;
			return name;
		};
		this.setLastName = function(last){
			surname = last;
			fullname = name + " " + surname;
			return surname;
		};
		this.setFullName = function(firstAndLast){
			fullname = firstAndLast;
			surname = fullname.split(" ")[1];
			name = fullname.split(" ")[0];
			return fullname;
		};
};


var bob = new Person('Bob Ross');
// bob.getLastName();
bob.setFullName("Haskell Curry");
bob.getLastName();