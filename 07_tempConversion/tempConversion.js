const convertToCelsius = function(temperatureInFahreneit) {
  let temperatureInCelsius =  (parseFloat(temperatureInFahreneit)-32)*5/9;
  return parseFloat(temperatureInCelsius.toFixed(1));
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let temperatureInFahreneit= parseFloat(temperatureInCelsius)*(9/5)+32;
  return parseFloat(temperatureInFahreneit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
