export function getDiscountPercentage(
  originalPrice: number,
  discountedPrice: number,
): number {
  if (originalPrice <= 0) return 0;

  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}
