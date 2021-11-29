function threeLargestNumbers(array){
    let sortedArray = array.sort(function(a, b) {return a - b;});
        return sortedArray.splice(-3)
}

// Merci de ne pas effacer la ligne en dessous.
exports.threeLargestNumbers =  threeLargestNumbers;