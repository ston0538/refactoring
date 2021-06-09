import { Order } from "../index";

describe("임시 변수를 질의 함수로 바꾸기", () => {
  it("price", () => {
    const order = new Order(10, 1000);
    expect(order.price).toEqual(9500);
  });
});
