import { alertForMiscreant } from "../index";

describe("질의 함수와 변경 함수 분리하기", () => {
  it("price", () => {
    const people = ["joker", "saluman", "Don", "John"];
    const found = alertForMiscreant(people);
    expect(found).toEqual("Don");
  });
});
