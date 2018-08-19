
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".

function translatePigLatin(str) {
  // var vowels = ["a", "e", "i", "o", "u"];
  // re = /^[b-z&&[^eiou]]+$/gi;
  re = /[aeiou]+/;
  if(re.test(str[0])){
    return str + "way";
  }
  var vowel = str.indexOf(str.match(re));
  str = str.substring(vowel,) + str.substring(0, vowel) + "ay";

  return str;
}

translatePigLatin("california");

console.log("Hello");
