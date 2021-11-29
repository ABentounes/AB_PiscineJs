
function twoNumberSum(array, targetSum){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] == targetSum && j != i) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

// Merci de ne pas effacer la ligne en dessous.
exports.twoNumberSum =  twoNumberSum;