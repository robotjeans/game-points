import { groupBy } from './helpers';

const mockArray = [
  { key: 'one', value: 10, quantity: 1, selected: false, color: 'jeans' },
  { key: 'one', value: 10, quantity: 1, selected: false, color: 'jeans' },
  { key: 'one', value: 10, quantity: 1, selected: false, color: 'jeans' },
  { key: 'two', value: 20, quantity: 1, selected: false, color: 'billy' },
];

const groupedArray = [
  { key: 'one', value: 30, quantity: 3, selected: false, color: 'jeans' },
  { key: 'two', value: 20, quantity: 1, selected: false, color: 'billy' },
];

describe('<groupBy>', () => {
  test('return merged object of MockObj', () => {
    const mock = groupBy(mockArray);
    expect(mock).toEqual(groupedArray);
  });
});
