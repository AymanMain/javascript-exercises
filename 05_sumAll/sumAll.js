const sumAll = function(first,last) {
/*sumAll(first,last) check if positive*/if ((first<0||last<0)||(!Number.isInteger(first))||(!Number.isInteger(last))){return "ERROR"};
/* if positive , for i(first->laster)=>res+=i} */
if (first>last){let temp=first;first=last;last=temp};
let res=0;
for(let i=first;i<=last;i++){
    res+=i;
};
return res;
};

// Do not edit below this line
module.exports = sumAll;
