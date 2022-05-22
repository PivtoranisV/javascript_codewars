//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if(num <= 0){ //check if num is a value that is less than or equal to zero
    return num; //if yes, return same value
  }
    return -Math.abs(num); //statement that converts the positive value into a negative
}

//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals; //return sum of goals from all leagues
}

//https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript

function move(position, roll) {
  // return the new position
  const newPosition = position + roll * 2; //as per description user ralls two times and add to current position
  return newPosition;
}

//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  //Compering two string
  if (name === owner) {
    return "Hello boss"; // If equal return Hello boss
  } else {
    return "Hello guest";
  }
}

//https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time * 0.5); // Math.floor function that rounded to the smallest value.
}

//https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2) {
  const flower1Even = flower1 % 2 === 0;
  const flower2Even = flower2 % 2 === 0;

  if ((flower1Even && !flower2Even) || (!flower1Even && flower2Even)) {
    return true;
  }
  return false;
}

//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

 function stringToArray(string) {
   return string.split(' ')
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/solutions/javascript

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};
