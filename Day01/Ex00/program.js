function tabTriCarre(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = array[i] ** 2;
    }
    return result
  }  

// Merci de ne pas effacer la ligne en dessous.
exports.tabTriCarre =  tabTriCarre;