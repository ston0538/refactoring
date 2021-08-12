import { statement } from '../../src/index';
import * as plays from '../../plays.json';
import * as invoices from '../../invoices.json';

describe('청구서 테스트', () => {
  test('청구서 출력', () => {
    const actual = `청구 내역 (고객명: Bigo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n`;
    expect(statement(invoices, plays)).toEqual(actual);
  });
});
