export default function NewsLetter() {
  return (
    <div className="newsletter">
      <form className="newsletter__form">
        <div className="form__group form__group--sm">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form__input-text"
          />
        </div>
        <button type="submit" className="btn btn--sm btn--primary">
          send
        </button>
      </form>
    </div>
  );
}
