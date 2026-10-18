import { getDiscountPercentage } from "../../utils/discount";

interface DiscountPriceProps {
  originalPrice: number;
  discountedPrice: number;
}

function DiscountSticker({
  originalPrice,
  discountedPrice,
}: DiscountPriceProps) {
  const discountPercentage = getDiscountPercentage(
    originalPrice,
    discountedPrice,
  );
  if (discountPercentage <= 0) {
    return null; // Don't render the sticker if there's no discount
  }

  return (
    <div className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">
      {discountPercentage}%
    </div>
  );
}

export default DiscountSticker;
