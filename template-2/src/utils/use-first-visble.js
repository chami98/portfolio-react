import  { useEffect, useRef, useState } from "react";

export const useFirstVisible = (visibility = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: visibility, // 0.5 means 50% visibility required to trigger the animation
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return { isVisible, targetRef };
};
