import RatingStars from "./Ratings";

interface ReviewProps {
  review: {
    username: string;
    rating: number;
    description: string;
  };
}
function Review({ review }: ReviewProps) {
  return (
    <div className="flex flex-col border-t border-gray-200 py-4">
      <div className=" items-center gap-2">
        <span className="font-semibold">{review.username}</span>
        <RatingStars rating={review.rating} />
      </div>
      <p className="mt-1 text-gray-700">{review.description}</p>
    </div>
  );
}

export default Review;
