const validator = {
  isValid: function (creditCardNumber) {
    const arrayReversed = creditCardNumber.split("").reverse();

    for (let i = 0; i < arrayReversed.length; i++) {
      if (i % 2 !== 0) {
        arrayReversed[i] = arrayReversed[i] * 2;
        if (arrayReversed[i] > 9) {
          const getDigits = arrayReversed[i].toString().split("");
          let addDigits = 0;
          getDigits.forEach(function (element) {
            addDigits += parseInt(element);
          });
          arrayReversed[i] = addDigits;
        } else {
          arrayReversed[i] = arrayReversed[i] * 1;
        }
      } else {
        arrayReversed[i] = arrayReversed[i] * 1;
      }
    }

    let addTotal = 0
    arrayReversed.forEach(function (value) {
      addTotal += value;
    });
    const residue = addTotal % 10;

    if (residue === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function (creditCardNumber) {
    if (creditCardNumber.length > 4) {
      const hideNumbers = "#".repeat(creditCardNumber.length - 4);
      const showLastFour = creditCardNumber.substring(
        creditCardNumber.length - 4
      );
      const mask = hideNumbers + showLastFour;
      return mask;
    } else {
      return creditCardNumber;
    }
  },
};

export default validator;
