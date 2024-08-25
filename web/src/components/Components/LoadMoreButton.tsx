import LoadIcon from "../../assets/icons/loading.svg?react";

export default function LoadMoreButton() {
  return (
    <button className="personal-layout__btn">
      <span>show more order</span>
      <LoadIcon className="personal-layout__icon" />
    </button>
  );
}
