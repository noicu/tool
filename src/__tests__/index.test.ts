import { range, random, randomArr, randomDisrupt,moneyFormat } from '../index';

describe('math', () => {

  test('范围', () => {
    expect(range(50, 0, 100, 0, 1) === 0.5).toBeTruthy();
  });

  test('随机', () => {
    console.log(random());
    console.log(random(1));
    console.log(random(1, 2));
    console.log(randomArr(['随', '机', '数']));
    console.log(randomDisrupt('123'));
    console.log(randomDisrupt('随机应变'));
    console.log(randomDisrupt('随机应变',2));
    console.log(moneyFormat(123123123.22))
  });
});
