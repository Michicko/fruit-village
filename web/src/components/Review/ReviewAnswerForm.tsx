import Button from "../Button/Button";
import styles from "./Review.module.css";

interface ReviewAnswerFormPropsTypes {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
}

export default function ReviewAnswerForm({
  setIsEditing,
  answer,
  setAnswer,
}: ReviewAnswerFormPropsTypes) {
  const handleOnChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setAnswer(target.value);
  };

  const saveAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(answer);
    setIsEditing(false);
  };

  return (
    <form className={styles["review-answer-form"]} onSubmit={saveAnswer}>
      <textarea
        name="answer"
        id="answer"
        rows={4}
        className="text-area full"
        placeholder="Answer"
        value={answer}
        onChange={handleOnChange}
      ></textarea>
      <div className={styles.btns}>
        <Button
          bg="#42c84f"
          color="#fcfff9"
          hoveredBg="#0d6494"
          hoveredColor="#fcfff9"
          text="Submit"
          type={"submit"}
        />
        <Button
          bg="#bbbbbb"
          color="#fcfff9"
          hoveredBg="#979797"
          hoveredColor="#fcfff9"
          text={"cancel"}
          type={"button"}
          onClickHandler={() => setIsEditing(false)}
        />
      </div>
    </form>
  );
}
