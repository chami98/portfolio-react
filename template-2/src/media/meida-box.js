import { useFirstVisible } from "../utils/use-first-visble";

export const MediaBox = ({ item: { src }, link, rows }) => {
  const { isVisible, targetRef } = useFirstVisible();

  if (!src) return null;

  return (
    <div
      ref={targetRef}
      className={`media-box ${
        isVisible ? "visible" : "not-visible"
      } media-box-${rows}row`}
    >
      <img src={src} alt="media image" />
    </div>
  );
};
