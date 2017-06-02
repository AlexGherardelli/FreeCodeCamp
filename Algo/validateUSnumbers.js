
function telephoneCheck(str) {
  // Good luck!
  re = /^(1\s?)?(\(\d{3}\)|\d{3})(-?\s?)?(\d{3})(-?\s?)?(\d{4})$/g
  return re.test(str);
}

telephoneCheck("2 757 622-7382")

/*
telephoneCheck("2 757 622-7382")
telephoneCheck("(275)76227382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false
*/

complete = /^(1\s?)?(\((\d{3}\)))|(\d{3})(-?\s?)?(\d{3})(-?\s?)?(\d{4})$/g

prefix = /^(1\s?)?/g

first = /(\((\d{3}\)))|(\d{3})/g

space = /(-?\s?)?/

second = /(\d{3})/g

third = 

