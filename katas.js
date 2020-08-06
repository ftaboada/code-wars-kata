// Capitalization and Mutability

function capitalizeWord(word) {
  let wordlen = word.length;
  let wordC = word[0].toUpperCase();
  for (let i = 1; i < wordlen; i++) {
    wordC += word[i];
  }
  console.log(wordC);
  return wordC;
}
//capitalizeWord("paralelepipedo");

// Grasshopper - Debug

function weatherInfo(temp) {
  var c = convert(temp);
  if (c > 0) {
    return c + " is above freezing temperature";
  } else {
    return c + " is freezing temperature";
  }
}

function convert(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}
// Area or Perimeter
const areaOrPerimeter = function (l, w) {
  let resultado = 0;
  if (l === w) {
    resultado += l ** 2;
  } else {
    resultado += 2 * l + 2 * w;
  }
  return resultado;
};

//Grasshopper - Messi Goals

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// Parse float
function parseF(s) {
  if (isNaN(parseFloat(s)) === true) {
    return null;
  } else {
    return parseFloat(s);
  }
}
// string repeat

function repeatStr(n, s) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += s;
  }
  return string;
}
//simple string reversal 7kyu
function solve(str) {
  let strlen = str.length - 1;
  let newstr = [];
  for (let i = strlen; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr.toString();
}
