const titleCase = require('./index');

test('String with the first letter of each word', () => {
  expect(titleCase('iam react developer')).toEqual('Iam React Developer');
})