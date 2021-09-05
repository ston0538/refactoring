import { statement, htmlStatement } from '../../src/index';
import * as plays from '../../plays.json';
import * as invoices from '../../invoices.json';

const statementOutput = `청구 내역 (고객명: Bigo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n`;
const htmlOutput = `<h1>Statement for Bigo</h1>\n<table>\n<tr><th>play</th><th>seats</th><th>cost</th></tr>  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n</table>\n<p>Amount owed is <em>$1,730.00</em></p>\n<p>You earned <em>47</em> credits</p>
`;

describe('청구서 테스트', () => {
  test('청구서 출력', () => {
    const actual = statementOutput;
    expect(statement(invoices, plays)).toEqual(actual);
  });
  test('청구서 HTML 출력', () => {
    const actual = htmlOutput;
    expect(htmlStatement(invoices, plays)).toEqual(actual);
  });
});
