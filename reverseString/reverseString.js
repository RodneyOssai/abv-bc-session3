module.exports = {
  // Code for our function begins here.
    reverseString: (input) => {
		let result;
        switch(true){
            case input === '':  
                result = null;
                break; 
            default:
                let array = input.split(''); //Convert string the string into array using nothing as seperator
                array.reverse(); // Reverse the order of the elements in an my array.
                result = array.join(''); //Convert array into string
					if (input === result){ 
					result = true;
					}
                break;
		}
	return result;
	}
};

