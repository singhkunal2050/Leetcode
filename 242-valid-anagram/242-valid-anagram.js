/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Iterate through the string and create a hashmap for both the string characters and then compare the hashmaps 
var isAnagram = function(s, t) {
    if(s.length!=t.length)
        return false;

    let sKeys= {}
    let tKeys= {}

    for(let i = 0 ; i< t.length ; i++ ){
        sKeys.hasOwnProperty(s[i]) ? sKeys[s[i]]++ : sKeys[s[i]] = 1;
        tKeys.hasOwnProperty(t[i]) ? tKeys[t[i]]++ : tKeys[t[i]] = 1;
    }

    for(item in sKeys){
        if(sKeys[item] != tKeys[item])
            return false;
    }
    return true;
};

// sort and compare directly
// var isAnagram = function(s, t) {
//     return Array.from(s).sort(function(a,b){
//         return a.charCodeAt(0)-b.charCodeAt(0)
//     }).join('') == 
//     Array.from(t).sort(function(a,b){
//         return a.charCodeAt(0)-b.charCodeAt(0)
//     }).join('')
// };