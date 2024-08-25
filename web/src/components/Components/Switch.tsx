import React, { ReactElement, useRef } from "react";
import { v4 as uuid } from "uuid";

type SwitchProps = {
  switchIndex: number;
  setSwitchIndex: React.Dispatch<React.SetStateAction<number>>;
  switches: (string | ReactElement)[];
};

export default function Switch({
  switchIndex,
  setSwitchIndex,
  switches,
}: SwitchProps) {
  const switchesRef = useRef<HTMLDivElement | null>(null);

  const switchView = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const switches = switchesRef.current;
    if (target.classList.contains("switch--current")) {
      return;
    }
    if (switches) {
      const index = Array.from(switches.children).indexOf(target);
      setSwitchIndex(index);
    }
  };

  return (
    <div className="switches" ref={switchesRef}>
      {switches.map((el: string | ReactElement, i: number) => {
        return (
          <button
            className={switchIndex === i ? "switch switch--current" : "switch"}
            key={uuid()}
            onClick={switchView}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
}
