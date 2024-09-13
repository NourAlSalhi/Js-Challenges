//Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.
// titleCase('the great mouse detective') // 'The Great Mouse Detective'

const titleCase = (str) => {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

/// another solution by for loop without using any method
const TitleCase = (str) =>{
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        if(i === 0 || str[i - 1] === ' '){
            newStr += str[i].toUpperCase();
        }else{
            newStr += str[i];
        }
    }
    return newStr;
}
module.exports = titleCase;