import {statement} from "../src/js/statement"

describe('청구서 테스트', () => {
 test('청구서 출력', () => {
  const plays = {
    "hamlet": {
      "name": "Hamlet",
      "type": "tragedy"
    },
    "as-like": {
      "name": "As You Like It",
      "type": "comedy"
    },
    "othello": {
      "name": "Othello",
      "type": "tragedy"
    }
  }
  const invoices = {
    "customer": "Bigo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
    ]
  }
  const actual = `청구 내역 (고객명: Bigo) Hamlet: $650.00 (55석) As You Like It: $580.00 (35석) Othello: $500.00 (40석)총액: $1,730.00적립 포인트: 47점`
  expect(statement(invoices, plays)).toMatch(actual)
 }); 
});