import { useState } from "react";
import Pen from "../../assets/icons/pencil-outline-icon.svg?react";

type InfoProps = {
  name: string;
  value: string | number;
};

export default function Info({ name, value }: InfoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const edit = () => {
    setIsEditing(true);
  };

  return (
    <div className="info">
      <p>{name}:</p>
      <div>
        <p contentEditable={isEditing}>{value}</p>
        <button onClick={edit}>
          <Pen className="icon icon--sm" />
        </button>
      </div>
    </div>
  );
}
