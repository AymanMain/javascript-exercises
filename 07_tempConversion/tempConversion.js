const convertToCelsius = function(cel) {
  // f=(x-32)*(5/9)
  return res=Math.round(((cel-32)*(5/9))*10)/10;
};

const convertToFahrenheit = function(frn) {
  // c=(x*(9/5)+32)
  return res=Math.round(((frn*(9/5))+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
