import Cancel from "../../assets/icons/cancel.svg?react";

type AllergyProps = {
  allergy: string;
  removeAllergy: (arg: string) => void;
};

export default function Allergy({ allergy, removeAllergy }: AllergyProps) {
  return (
    <div className="allergy">
      <button onClick={() => removeAllergy(allergy)}>
        <Cancel className="allergy__icon stroked" />
      </button>
      <p>{allergy}</p>
    </div>
  );
}
