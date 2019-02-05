/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const splitInput = input.match(/[a-z]+|[^a-z]+/gi)
    if (!isNaN(splitInput[0])) {
      return splitInput[0]
    }
    else {
      return "invalid number"
    }
  };
  
  this.getUnit = function(input) {
    const validUnits = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    if (validUnits.toLowerCase().includes(input.toLowerCase())) {
      var input;
    }
    else {
      return 'invalid unit'
    }
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
