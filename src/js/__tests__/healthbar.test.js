import defineHealthCondition from '../healthbar.js';

test.each([
  ['healthy', {name: 'Маг', health: 90}, 'healthy'],
  ['wounded', {name: 'Маг', health: 35}, 'wounded'],
  ['critical', {name: 'Маг', health: 10}, 'critical'],
])('testing health condition function for %s condition when stats is %o', (status, inputValue, expectedValue) => {
  const outputValue = defineHealthCondition(inputValue);
  expect(outputValue).toBe(expectedValue);
})