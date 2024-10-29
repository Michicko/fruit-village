import { useState } from "react";
import styles from "./Review.module.css";
import Stars from "../Ratings/Stars";
import Return from "../../assets/icons/return.svg?react";
import ReviewAnswerForm from "./ReviewAnswerForm";
import LikeCounter from "../LikeCounter/LikeCounter";

interface ReviewPropsTypes {
  review: {
    id: string;
    author: string;
    date: string;
    rating: number;
    review: string;
    likes: number;
    dislikes: number;
    answer: string;
  };
}

export default function Review({ review }: ReviewPropsTypes) {
  const [isEditing, setIsEditing] = useState(false);
  const [answer, setAnswer] = useState(review.answer);
  const [likes, setLikes] = useState(review.likes);
  const [dislikes, setDisLikes] = useState(review.dislikes);

  const editAnswer = () => {
    setIsEditing(true);
    setAnswer(review.answer);
  };

  const deleteAnswer = () => {
    setAnswer("");
  };

  return (
    <div className={styles.review}>
      <div className="flex space-between">
        <h3 className={styles.author}>{review.author}</h3>
        <p className={styles.date}>{review.date}</p>
      </div>
      <Stars value={review.rating} size="md" />
      <p className="b">{review.review}</p>
      <div className="flex space-between">
        {review.answer ? (
          <div></div>
        ) : (
          <button
            className={styles["answer-btn"]}
            onClick={() => setIsEditing(true)}
          >
            <Return className="icon stroke poly md green" />
            answer
          </button>
        )}
        <div className={styles.counters}>
          <LikeCounter count={likes} setCount={setLikes} type="likes" />
          <LikeCounter
            count={dislikes}
            setCount={setDisLikes}
            type="dislikes"
          />
        </div>
      </div>
      <div className={styles["review-answer-box"]}>
        {review.answer && (
          <div className={styles["answer-block"]}>
            <p>{review.answer}</p>
            <div className={styles.btns}>
              <button onClick={editAnswer}>edit</button>
              <button onClick={deleteAnswer}>delete</button>
            </div>
          </div>
        )}
        {isEditing && (
          <ReviewAnswerForm
            setIsEditing={setIsEditing}
            answer={answer}
            setAnswer={setAnswer}
          />
        )}
      </div>
    </div>
  );
}
