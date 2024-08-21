type StarProps = {
  rating: number;
  size?: string;
};

export default function Stars({ rating, size }: StarProps) {
  return <div className={`stars stars--${size}`} data-star={rating}></div>;
}
