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