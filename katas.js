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
//is n divisible by x and y?
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  }
  return false;
}
//keep hydrated!
function litres(time) {
  let res = Math.floor(time / 2);

  return res;
}
//Fake Binary
function fakeBin(x) {
  let xlen = x.length;
  let resultado = "";
  for (let i = 0; i < xlen; i++) {
    if (x[i] < 5) {
      resultado += "0";
    } else {
      resultado += "1";
    }
  }
  return resultado;
}
// Short long Short
function solution(a, b) {
  if (a === "" || b === "") {
    console.log(a + b);
    return a + b;
  }
  if (a.length < b.length) {
    console.log("solution -> a + b + a", a + b + a);
    return a + b + a;
  } else {
    console.log("solution -> b + a + b", b + a + b);
    return b + a + b;
  }
}
// Find Multiples of a Number
function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i++) {
    if (i % interger === 0) {
      result.push(i);
    }
  }
  return result;
}
//Check the exam
function checkExam(array1, array2) {
  let len = array1.length;
  let resultado = 0;
  for (let i = 0; i < len; i++) {
    if (array1[i] === array2[i]) {
      resultado += 4;
    } else if (array2[i] !== "" && array2[i] !== array1[i]) {
      resultado -= 1;
    }
  }
  if (resultado < 0) {
    return 0;
  }
  return resultado;
}
//l1: Bartender, drinks!
function getDrinkByProfession(param) {
  let np = param.toUpperCase();
  if (np === "JABRONI") {
    return "Patron Tequila";
  } else if (np === "SCHOOL COUNSELOR") {
    return "Anything with Alcohol";
  } else if (np === "PROGRAMMER") {
    return "Hipster Craft Beer";
  } else if (np === "BIKE GANG MEMBER") {
    return "Moonshine";
  } else if (np === "POLITICIAN") {
    return "Your tax dollars";
  } else if (np === "RAPPER") {
    return "Cristal";
  } else {
    return "Beer";
  }
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
// Isograms 7kyu
function isIsogram(str) {
  str = str.toLowerCase();
  const strlen = str.length;
  for (let i = 0; i < strlen; i++) {
    for (let j = 1; j < strlen; j++) {
      if (j !== i && str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
