export const sendMailNow = async (nameV, emailV, messageV, user_email_id) => {
  return fetch("https://efolio-portfolio.web.app/api/v1/sendMessage/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameV,
      email: emailV,
      message: messageV,
      receiver: user_email_id,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      return true;
    }).catch(e => {
      console.error(e)
      return false
    });
};
