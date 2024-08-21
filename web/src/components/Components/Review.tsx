import Like from "../../assets/icons/happy-icon.svg?react";
import DisLike from "../../assets/icons/sad-face-icon.svg?react";
import Stars from "./Stars";

type ReviewTypes = {
  author: string;
  date: string;
  text: string;
  rating: number;
  likes: number;
  dislikes: number;
};

type ReviewProps = {
  review: ReviewTypes;
};

export default function Review({ review }: ReviewProps) {
  const date = new Date(review.date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="review">
      <div>
        <h6 className="review__author">{review.author}</h6>
        <p className="text text--sm">{review.date}</p>
      </div>
      <Stars rating={review.rating} />
      <p className="text text--sm text--bold review__text">{review.text}</p>
      <div className="review__counts">
        {/* like */}
        <button className="review__count">
          <Like className="icon icon--sm icon--primary" />
          <span>{review.likes}</span>
        </button>
        {/* dislike */}
        <div className="review__count">
          <DisLike className="icon icon--sm icon--secondary" />
          <span>{review.dislikes}</span>
        </div>
      </div>
    </div>
  );
}
