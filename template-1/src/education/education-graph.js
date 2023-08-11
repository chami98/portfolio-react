import "./timeline-graph.css";
import { OpacityAnimated } from "../utils/opacity-animated";

export const TimeLineGraph = ({
  items,
  showCurrent = false,
  showDummy = false,
}) => {
  const timeLineGraphItems = [];
  let itemIdx = 0;
  if (items?.length) {
    const maxYear = Number.parseInt(items[0].fromDate);
    const minYear = Number.parseInt(items[items?.length - 1].fromDate);
    for (let year = maxYear; year >= minYear; year--) {
      if (Number.parseInt(items[itemIdx].fromDate) === year) {
        timeLineGraphItems.push(items[itemIdx]);
        itemIdx++;
      } else {
        if (showDummy) {
          timeLineGraphItems.push({
            fromDate: year,
            dummy: true,
          });
        }
      }
    }
  }

  return (
    <>
      <div className="timeline">
        {timeLineGraphItems?.map((d, i) => (
          <OpacityAnimated visibiltiy={0.8} key={d.fromDate}>
            <div
              className={`experiance-container experiance-container-${
                d.dummy ? "right" : d.side
              } ${i === 0 && showCurrent && "current"} ${d.dummy && "dummy"}`}
            >
              <div className="date">
                {i === 0 && showCurrent
                  ? "current"
                  : `${d.fromDate} ${d.dummy ? "" : d.fromMonth.slice(0, 3)}`}
              </div>

              {!d.dummy && (
                <div className="content">
                  <h2>{d.title}</h2>
                  <p>{d.subTitle}</p>
                </div>
              )}
            </div>
          </OpacityAnimated>
        ))}
      </div>
    </>
  );
};
