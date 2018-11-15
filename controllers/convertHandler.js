/*
*
*
*       Complete the handler logic below
*       
*       
*/ 

function ConvertHandler() {
  
  this.getNum = function(input) {

   
    var unitRegex = /[a-z]/i;
    if(unitRegex.test(input)){
      var sliceIndex = input.match(unitRegex).index;
      var inputCopy = input.slice(0,sliceIndex);    
    } else {
      var inputCopy = input.slice();
    }
    
    
    var matchNumRegex = /^\d+(\.\d+){0,1}(\/\d+(\.\d+){0,1}){0,1}$/;
    if(inputCopy.match(matchNumRegex)){
      return eval(inputCopy.match(matchNumRegex)[0]);    
    } else if (inputCopy){
      return 'invalid number';
    }
    
    else {
      return 1;    
    }
    
    return 'invalid number';
  };
  
  this.getUnit = function(input) {
    var result;
    
    var matchUnitRegex = /gal$|L$|lbs$|kg$|mi$|km$/i;
    
    if(matchUnitRegex.test(input)){
      return input.match(matchUnitRegex)[0];    
    } else {
      return 'invalid unit';
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var initUnit = initUnit.toLowerCase();

    switch(initUnit){
      case 'gal':
        return 'l';
      case 'l':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      default:
        return 'invalid unit';
                   }

  };

  this.spellOutUnit = function(unit) {

    switch(unit){
      case 'gal':
        return 'Gallon(s)';
      case 'l':
        return 'Liter(s)';
      case 'lbs':
        return 'Pound(s)';
      case 'kg':
        return 'Kilogram(s)';
      case 'mi':
        return 'Mile(s)';
      case 'km':
        return 'Kilometer(s)';
      default:
        return 'invalid unit';
                   }

  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if(!initNum){
      return 'invalid number';    
    }
    
    var initUnit = initUnit.toLowerCase();
    
    switch(initUnit){
      case 'gal':
        return Number(((initNum) * galToL).toFixed(5));
      case 'l':
        return Number(((initNum) / galToL).toFixed(5));
      case 'lbs':
        return Number(((initNum) * lbsToKg).toFixed(5));
      case 'kg':
        return Number(((initNum) / lbsToKg).toFixed(5));
      case 'mi':
        return Number(((initNum) * miToKm).toFixed(5));
      case 'km':
        return Number(((initNum) / miToKm).toFixed(5));
      default:
        return 'invalid number';
                   }

  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    return  initNum + " " + this.spellOutUnit(initUnit) + " converts to "+ returnNum + " " + this.spellOutUnit(returnUnit);
  };
  
}

module.exports = ConvertHandler;
