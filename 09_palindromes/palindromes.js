const palindromes = function (str) {
let string=Array.from(str.toLowerCase());
for(let i=0;i<(string.length/2);i++){
    if(string[i]!==string[(string.length)-1-i]){return false;};
};
return true;
};

// Do not edit below this line
module.exports = palindromes;
