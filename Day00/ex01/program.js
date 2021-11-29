function isPalindrome(string){
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - i - 1]) {
					return false
        }
    }
    return true
}
    
    // Merci de ne pas effacer la ligne en dessous.
    exports.isPalindrome =  isPalindrome;