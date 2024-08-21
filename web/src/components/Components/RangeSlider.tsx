type ValueTypes = {
  x: number;
  y: number;
  min: number;
  max: number;
};

type RangeSliderProps = {
  values: ValueTypes;
  setValues: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
      min: number;
      max: number;
    }>
  >;
  cb: () => void;
};

export default function RangeSlider({
  values,
  setValues,
  cb,
}: RangeSliderProps) {
  // oninput="this.parentNode.style.setProperty('--value-a',this.value); this.parentNode.style.setProperty('--text-value-a', JSON.stringify(this.value))"

  // oninput="this.parentNode.style.setProperty('--value-b',this.value); this.parentNode.style.setProperty('--text-value-b', JSON.stringify(this.value))"

  // style='--min:-500; --max:500; --value-a:-220; --value-b:400; --suffix:"%"; --text-value-a:"-220"; --text-value-b:"400";'

  const handleOnChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    cb();
  };

  return (
    <div className="range-slider flat" data-ticks-position="top">
      <input
        type="range"
        min={values.min}
        max={values.max}
        value={values.x}
        name="x"
        onChange={handleOnChange}
      />
      <output
        htmlFor="x"
        style={{ counterReset: `c ${values.x}` }}
      ></output>
      <input
        type="range"
        min={values.min}
        max={values.max}
        value={values.y}
        name="y"
        onChange={handleOnChange}
      />
      <output
        htmlFor="y"
        style={{ counterReset: `c ${values.y}`, textAlign: 'end' }}
      ></output>
      <div className="range-slider__progress"></div>
    </div>
  );
}
