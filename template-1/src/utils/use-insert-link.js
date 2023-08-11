import { useEffect } from "react";

export const useInsertLink = (link) => {
  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";

    const prefix = isDev ? "https://efolio-portfolio.web.app" : "../";
    const href = `${prefix}/publicjs${link}`;
    const scriptTag = document.createElement("script");
    scriptTag.src = href;

    const head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(scriptTag);

    console.log("href", href);
  }, [link]);
};
