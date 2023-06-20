function makeEveryLetterAfterXCaps(str, letter) {
    try {
        // Check if the input arguments are valid
        if (typeof str !== 'string' || typeof letter !== 'string') {
            throw new TypeError('Both arguments must be strings');
        }
        
        // Find all instances of the letter in the string
        let index = str.indexOf(letter);
        while (index !== -1) {
            // Capitalize all letters after the found letter
            str = str.slice(0, index + 1) + str.slice(index + 1, index + 2).toUpperCase() + str.slice(index + 2);
            
            // Find the next instance of the letter in the string
            index = str.indexOf(letter, index + 1);
        }
        
        // Return the modified string
        return str;
    } catch (error) {
        // Log the error
        console.error(error);
        return '';
    }
}
