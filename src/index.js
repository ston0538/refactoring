export class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }
  get basePrice() {
    return this._quantity * this._item;
  }
  get price() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return this.basePrice * discountFactor;
  }
}
