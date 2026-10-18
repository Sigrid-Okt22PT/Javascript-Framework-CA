import { Star, StarHalf } from "lucide-react";

interface RatingStarsProps {
  rating: number;
}

function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= rating) {
          return (
            <Star key={star} size={18} className="fill-accent text-accent" />
          );
        }

        if (star - 0.5 === rating) {
          return (
            <StarHalf
              key={star}
              size={18}
              className="fill-accent text-accent"
            />
          );
        }

        return <Star key={star} size={18} className="text-accent" />;
      })}

      <span className="ml-2 text-sm">{rating}/5</span>
    </div>
  );
}

export default RatingStars;
