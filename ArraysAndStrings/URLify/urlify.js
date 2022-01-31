// To replace all spaces in a string with %20. String at end has space to hold additional characters, and you are given the true length of the string.
const testSentence = "Mr John Smith    "; // 17 in total; only include 13 because we do not include whitespace

let testString = otherUrlify(testSentence, 13);
console.log(testString);

function easyUrlify(string) {
    let newString = string.trim();
    console.log(newString.replaceAll(' ', '%20'));
}

function otherUrlify(string, truelength) {
    // If you use .split() on the original string, you will get the portion of the string you need, excluding white space characters - you want to replace the white space chars. 
    let stringArray = string.split('');
    let stringPointer = 0;

    while (stringPointer < string.length) {
        // If you encounter a white space character, traverse from the back of array until 3 spaces after the initial white space character.
        // While doing this traversal, in the stringArray which contains the string w/o white space characters, move each character over 2 spaces to the right, making room for 
        // white space chars
        if (stringArray[stringPointer] === ' ') {
            for (let i = string.length - 1; i > stringPointer+3; i--) {
                stringArray[i] = string[i-2];
            }
            stringArray[stringPointer] = '%';
            stringArray[stringPointer+1] = '2';
            stringArray[stringPointer+2] = '0';
        }
        stringPointer++;
    }
    return stringArray.join('');
}