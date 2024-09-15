const add = function(add1,add2) {
	return res=add1+add2;
};

const subtract = function(sub1,sub2) {
  return res=sub1-sub2;
	
};

const sum = function(tosum) {
  let sumR=0
  for(let i=0;i<tosum.length;i++){
    sumR+=tosum[i];
  };
  return sumR;
};

const multiply = function(tomul) {
  let mulR=1;
for(let i=0;i<tomul.length;i++){
  mulR*=tomul[i];};
  return mulR;
};

const power = function(pow1,pow2) {
	return Math.pow(pow1,pow2);
};

const factorial = function(fct) {
	if (fct==0){return 1;};
  let res=1;
  for (let i=1;i<=fct;i++){
    res*=i;};
    return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
