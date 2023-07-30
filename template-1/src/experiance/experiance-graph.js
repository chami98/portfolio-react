import "./experiance-graph.css";
import { useContext } from "react";
import { UserContext } from "../App";
import { OpacityAnimated } from "../utils/opacity-animated";

export const ExperianceGraph = () => {
  const data = useContext(UserContext);

  const items = data?.sections?.experience_section?.data
    ?.sort((a, b) => (a.fromDate < b.fromDate ? 1 : -1))
    ?.map((d, i) => ({
      ...d,
      src: d.link,
      side: i % 2 === 0 ? "left" : "right",
    }));

  const expGraphItems = [];
  let itemIdx = 0;
  if (items?.length) {
    const maxYear = Number.parseInt(items[0].fromDate);
    const minYear = Number.parseInt(items[items?.length - 1].fromDate);
    for (let year = maxYear; year >= minYear; year--) {
      if (Number.parseInt(items[itemIdx].fromDate) === year) {
        expGraphItems.push(items[itemIdx]);
        itemIdx++;
      } else {
        expGraphItems.push({
          fromDate: year,
          dummy: true,
        });
      }
    }
  }

  return (
    <>
      <div className="timeline">
        {expGraphItems?.map((d, i) => (
          <OpacityAnimated visibiltiy={0.8} key={d.fromDate}>
            <div
              className={`experiance-container experiance-container-${
                d.dummy ? "right" : d.side
              } ${i === 0 && "current"} ${d.dummy && "dummy"}`}
            >
              <div className="date">
                {i === 0
                  ? "current"
                  : `${d.fromDate} ${d.dummy ? "" : d.fromMonth.slice(0, 3)}`}
              </div>

              {!d.dummy && (
                <div className="content">
                  <h2>
                    {d.companyName} | {d.designation}
                  </h2>
                  <p>{d.description}</p>
                </div>
              )}
            </div>
          </OpacityAnimated>
        ))}
      </div>
    </>
  );
};
