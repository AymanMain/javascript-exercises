const repeatString = function(string,num) {
let res="";
if(num<0){return "ERROR"}
else{
for(let i=num;i>0;i--){
res+=string;
};
return res;};
};

// Do not edit below this line
module.exports = repeatString;
