function threeLargestNumbers(array){
    return array.sort(function(a, b) {return a - b;}).splice(-3);
}

// Merci de ne pas effacer la ligne en dessous.
exports.threeLargestNumbers =  threeLargestNumbers;