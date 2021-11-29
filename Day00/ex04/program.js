function levDist(string1, string2) {
    let i = 0;
    let result = "";
    for (let j = 0; j < string2.length; j++) {
        if (string1[i] !== string2[j] || i === string1.length) {
            result += string2[j];
        } else {
            i++;
        }
    }
    return result.length;
}
// Merci de ne pas effacer la ligne en dessous.
exports.levDist =  levDist;