/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    /*
    1 kg
    1 . 2 kg
    1 / 2 kg
    1 / 2 . 5 kg
    Can't start with .
    Can only have one .
    Can only have one /
    */
    const splitInput = input.match(/[a-z]+|[^a-z]+/gi)
    const number = splitInput[0]

    if(number.search (/\d+([\/.]\d+)?/g)){
      const fraction = number.split(/[\/.]/)
      const fractionFloat = parseInt(fraction[0]) / parseInt(fraction[1])
      return fractionFloat
    }
    else if (!isNaN(number)) {
      return number
    }
    else {
      return "invalid number"
    }
  };
  
  this.getUnit = function(input) {
    // const validUnits = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    // const validUnit = validUnits.filter(unit => unit.toLowerCase() === input.toLowerCase())
    // (validUnit ? validUnit : "invalid unit")
    var result;
    return result;

  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
