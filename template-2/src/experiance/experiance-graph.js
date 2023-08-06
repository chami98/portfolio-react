import "./experiance-graph.css";
import { useContext } from "react";
import { UserContext } from "../App";
import { OpacityAnimated } from "../utils/opacity-animated";

export const ExperianceGraph = () => {
  const data = useContext(UserContext);

  
  const education = data?.sections?.education_sec?.data;

  const items = data?.sections?.experience_section?.data
    ?.sort((a, b) => (a.fromDate < b.fromDate ? 1 : -1))
    ?.map((d, i) => ({
      ...d,
      src: d.link,
      side: "right",
    }));

  const expGraphItems = [];
  
  let itemIdx = 0;
  if (items?.length && education) {
    items.push(...education)
    
  }

  return (
    <>
      <div className="timeline">
        {items?.map((d, i) => (
          <OpacityAnimated visibiltiy={0.8} key={d.fromDate}>
            <div
              className={`experiance-container experiance-container-right`}
            >
              {!d.dummy && (
                <div className="content">
                  <h2 className="title">
                    {d.companyName ||d.degree } | {d.designation || d.university}
                  </h2>
                  <p>{d.description || d.instituteName}</p>
                </div>
              )}
            </div>
          </OpacityAnimated>
        ))}
      </div>
    </>
  );
};
