const convertToCelsius = function(f) {
  let conversion =  5/9*(f - 32)
  return Math.round(conversion*10)/10;
};

const convertToFahrenheit = function(c) {
  let conversion = c*1.8+32
  return Math.round(conversion * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
