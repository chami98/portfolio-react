import { useEffect, useState } from "react";

export const useUserData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const test_user_id = "o0jzTAnkiUh952RFiT9IUQnJnKt2";
  // only run testing version on devepment
  const testing = process.env.NODE_ENV === "development";

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

          const sectionOrder = []
          JSON.parse(response.data.sections).forEach((section) => {
            sections[section.type] = section;
            sectionOrder.push(section.type)
          });
          setData({
            ...response.data,
            sections,
            sectionOrder
          });

          const userName = response.data?.user_info?.name;

          document.title = userName;
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
