type StatProps = {
  number: string;
  description: string;
};

export default function Stat({ number, description }: StatProps) {
  return (
    <div className="stat">
      <p className="stat__number">{number}</p>
      <div className="stat__desc">{description}</div>
    </div>
  );
}
