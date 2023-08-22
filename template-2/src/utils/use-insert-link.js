import { useEffect } from "react";

export const useInsertLink = (link, defPrefix="") => {
  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";

    const prefix = defPrefix ? defPrefix : isDev ? "https://efolio-portfolio.web.app" : "../";

    const href = `${prefix}/publicjs/${link}.js`;
    const scriptTag = document.createElement("script");
    scriptTag.src = href;

    const head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(scriptTag);


  }, [link]);
};
