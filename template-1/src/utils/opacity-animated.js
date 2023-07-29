import { useFirstVisible } from "./use-first-visble";

import './opacity-animated.css'

export const OpacityAnimated = ({ children, visibiltiy }) => {
  const { isVisible, targetRef } = useFirstVisible(visibiltiy);

  return (
    <div
      ref={targetRef}
      className={`${isVisible ? "visible-opacity" : "not-visible-opacity"}`}
    >
      {children}
    </div>
  );
};
