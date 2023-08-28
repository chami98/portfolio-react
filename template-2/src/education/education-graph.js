import "./experiance-graph.css";
import { useContext } from "react";
import { UserContext } from "../App";
import { OpacityAnimated } from "../utils/opacity-animated";

export const EducationGraph = () => {
  const data = useContext(UserContext);

  
  const education = data?.sections?.education_sec?.data;

  const items = []

  if (education?.length) {
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
