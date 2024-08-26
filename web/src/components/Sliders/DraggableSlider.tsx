import { ReactNode } from "react";

type SliderProps = {
  children: ReactNode;
};

export default function DraggableSlider({ children }: SliderProps) {
  return (
    <div className="draggable-slider">
      <div className="draggable-slider__box">
        <div className="draggable-slider__slides">{children}</div>
      </div>
    </div>
  );
}
