interface PrimaryHeadingPropsTypes {
  text: string;
}

export default function PrimaryHeading({ text }: PrimaryHeadingPropsTypes) {
  return (
    <h1 className="primary-heading">
      {text} <span className="line"></span>
    </h1>
  );
}
