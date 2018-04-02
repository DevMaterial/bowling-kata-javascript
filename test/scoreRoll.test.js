let assert = require('assert');
const scoreRoll = require('../scoreRoll');

describe('scoreRoll', () => {
  let state;

  beforeEach(() => {
    state = { score: 0, rolls: [] };
  });

  it ('throws error if input is greater than 10', () => {
    assert.throws(
      () => {
       scoreRoll(15);
      },
      'Input is greater than 10'
    );
  });

  it('throws an error if input is less than 0', () => {
    assert.throws(
      () => {
        scoreRoll(-1);
      },
      'Input cannot be less than 0'
    );
  });

  it('returns the score for a valid input', () => {
    state = scoreRoll(3, state);
    assert.equal(state.score, 0); 
  });

  it('returns the score for another valid input', () => {
    state = scoreRoll(9, state);
    assert.equal(state.score, 0);
  });

  it('returns the correct score when rolling strike on first roll', () => {
    state = scoreRoll(10, state);
    assert.equal(state.score, 0);
  });

  it('returns a score for the next roll after a strike', () => {
    state = scoreRoll(10, state);
    state = scoreRoll(2, state);

    assert.equal(state.score, 0);
  });

  it('returns a score for the next roll after a strike', () => {
    state = scoreRoll(10, state);
    state = scoreRoll(2, state);
    state = scoreRoll(3, state);

    assert.equal(state.score, 20);
  });

  it.only('returns a score for the first roll after two strikes and a regular roll', () => {
    state = scoreRoll(10, state);
    state = scoreRoll(10, state);
    state = scoreRoll(2, state);
    assert.equal(state.score, 22);
  });
});