// discount.js

export function applyDiscount(total, coupon) {
  if (coupon === "SAVE10") {
    return total - total * 0.10;
  }

  return total;
}