type InfoProps = {
  number: string;
  description: string;
};

export default function Info({ number, description }: InfoProps) {
  return (
    <div className="info">
      <p className="info__number">{number}</p>
      <div className="info__desc">{description}</div>
    </div>
  );
}
