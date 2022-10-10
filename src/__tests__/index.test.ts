import { range } from '../index';

describe('math', () => {

  test('范围', () => {
    expect(range(50, 0, 100, 0, 1) === 0.5).toBeTruthy();
  });
});
