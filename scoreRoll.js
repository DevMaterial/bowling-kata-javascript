const validateRoll = (pins) => {
  if (pins > 10) {
    throw new Error('Input is greater than 10');
  } else if (pins < 0) {
    throw new Error('Input cannot be less than 0');
  }
}

function scoreRoll(pins, { score, rolls }) {
  validateRoll(pins);

  if (pins === 10) {
    rolls.push(pins, null);
  } else {
    rolls.push(pins);
  }
  
  let strike = rolls[rolls.length - 4] === 10;
  const lastRoll = rolls[rolls.length - 1];
  let lastLastRoll = rolls[rolls.length - 2];
  const currentFrame = rolls.indexOf(rolls.length - 1);

  if (lastLastRoll == null) {
    lastLastRoll = rolls[rolls.length - 3];
    strike = rolls[rolls.length - 5] === 10
  }
  
  if (currentFrame % 2 !== 0) { // odd 
    if (strike) { // strike
      score += 10 + lastRoll + lastLastRoll + (lastRoll + lastLastRoll);
    }
  }
  console.log('last roll', lastRoll);
  console.log('lastLast roll', lastLastRoll);
  console.log(score);
  return { score, rolls };
}

module.exports = scoreRoll;