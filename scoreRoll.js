const validateRoll = (roll) => {
  if (roll > 10) {
    throw new Error('Input is greater than 10');
  } else if (roll < 0) {
    throw new Error('Input cannot be less than 0');
  }
}

function scoreRoll(roll, { score, rolls }) {
  validateRoll(roll);

  if (roll === 10) {
    rolls.push(10);
  }

  return { score, rolls };
}

module.exports = scoreRoll;