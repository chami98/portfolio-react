import { useEffect, useState } from "react";

export const useUserData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const test_user_id = "o0jzTAnkiUh952RFiT9IUQnJnKt2";
  const testing = true;

  const url = window.location.pathname;
  const id = testing ? test_user_id : url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    fetch("https://efolio-portfolio.web.app/api/v1/getPortfolio/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result == true) {
          setData(response.data);
          // setLoading(false);
        }

        return response;
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
  };
};
