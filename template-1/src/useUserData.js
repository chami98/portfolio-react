import { useEffect, useState } from "react";

export const useUserData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const test_user_id = "o0jzTAnkiUh952RFiT9IUQnJnKt2";
  const testing = true;

  const url = window.location.pathname;
  const id = testing ? test_user_id : url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    if (!id) return;

    fetch("https://efolio-portfolio.web.app/api/v1/getPortfolio/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result === true) {
          const sections = {};

          JSON.parse(response.data.sections).forEach((section) => {
            sections[section.type] = section;
          });
          setData({
            ...response.data,
            sections,
          });
        }

        return response;
      })
      .finally(() => setLoading(false));
  }, [id]);

  return {
    data,
    loading,
  };
};
