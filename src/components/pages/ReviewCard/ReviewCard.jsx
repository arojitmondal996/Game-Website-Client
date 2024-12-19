// import ReviewDetails from "./AddToWatchlist";
import ReviewDetails from "../../ReviewDetails/ReviewDetails";
const ReviewCard = ({ review }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h1>Hi</h1>
            {/* <h2 className="text-lg font-semibold">{review.gameTitle}</h2>
            <p className="text-gray-600">{review.reviewDescription}</p>
            <p className="text-sm">Rating: {review.rating}/10</p>
            <p className="text-sm">Genre: {review.genre}</p>
            <ReviewDetails review={review} /> */}
        </div>
    );
};

export default ReviewCard;