/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// if len are diff, false, if same, sort both strings and check if equal
var isAnagram = function(s, t) {
    
    if(s.length != t.length)
        return false;
    if(sortString(s) === sortString(t)) 
        return true;
    return false;

};


const sortString = (str) => {
    return str.split('').sort().join('');
}