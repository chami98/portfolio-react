const testing = process.env.NODE_ENV === "development";

export function handleLinkClick(userId, link) {
  if (testing) {
    console.log("Not saving stuff, opening link...");
    console.log(link);
    return true;
  }

  try {
    doAnalytics(userId, "link_redirect", link)
      .then((data) => {
        //window.location.href = link.href;
        //console.log("Analytics done, redirect"); // Do something with the data
      })
      .catch((error) => {
        //window.location.href = link.href;
        //console.error("Analytics error"); // Handle any errors that occurred
      });
  } catch (e) {}

  // Prevent the default behavior of the link click
  return true;
}

export function getProperDate(month, year) {
  var date = "";
  if (month) {
    date += month + " ";
  }

  date += "" + year;
  return date;
}

export function getDefaultDescForSection(type, defaultValue) {
  if (defaultValue) {
    return defaultValue;
  }

  if (type === "project_section") {
    return "I have worked on variety of projects.";
  } else if (type === "testimonial_section") {
    return "What people are saying about me.";
  } else if (type === "media_sec") {
    return "Some of my works.";
  } else if (type === "experience_section") {
    return "Having experience that can help you.";
  } else if (type === "education_sec") {
    return "Had a great learning experience.";
  } else if (type === "awards_section") {
    return "Awards I’ve reached during my education & working times.";
  }

  return "-";
}

export function getMachineId() {
  let machineId = localStorage.getItem("MachineId");

  if (!machineId) {
    machineId = crypto.randomUUID();
    localStorage.setItem("MachineId", machineId);
  }

  return machineId;
}

export function doAnalytics(userId, type, extraData) {
  if (testing) {
    return true;
  }

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  //console.log("Params "+urlParams)
  if (urlParams.get("preview") === 1) {
    console.log("This is a preview page, so ignoring some stuff");
    return true;
  }

  return fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      return fetch("https://efolio-portfolio.web.app/api/v1/analytics/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: type,
          extraData: extraData,
          userId: userId,
          machineId: getMachineId(),
          ipInfo: data,
          browserInfo: JSON.parse(
            JSON.stringify(
              window?.platform,
              [
                "name",
                "version",
                "layout",
                "prerelease",
                "os",
                "manufacturer",
                "product",
                "description",
                "ua",
              ],
              4
            )
          ),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          return true;
        });
    });
}
