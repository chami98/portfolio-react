import { AnchorHOC } from "../utils/anchor-hoc";
import { useFirstVisible } from "../utils/use-first-visble";

export const MediaBox = ({ item: { src, link }, rows }) => {
  const { isVisible, targetRef } = useFirstVisible();

  if (!src) return null;

  return (
    <AnchorHOC link={link}>
      <div
        ref={targetRef}
        className={`media-box ${
          isVisible ? "visible" : "not-visible"
        } media-box-${rows}row`}
      >
        <img src={src} alt="media image" />
      </div>
    </AnchorHOC>
  );
};
