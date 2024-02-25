import moment from "moment/moment";
import { Cell } from "./Cell";
import { Month } from "./Month";
import { WeekDay } from "./WeekDay";
import { Tooltip } from "antd";

function getColorByContribution(contribution) {
  if (contribution >= 30) {
    return "#254E77";
  }
  if (contribution >= 20) {
    return "#527BA0";
  }
  if (contribution >= 10) {
    return "#7FA8C9";
  }
  if (contribution > 0) {
    return "#ACD5F2";
  }
  return "#EDEDED";
}

export function Timeline({ data }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "950px",
          marginLeft: "15px",
        }}
      >
        {data.resultWithMonth.map((item, monthIndex) => {
          return <Month key={monthIndex} month={item.month}></Month>;
        })}
      </div>
      <div style={{ display: "flex", height: "115px" }}>
        <div>
          {data.result[0].items.map((date, contributions) => {
            let day = moment(date.date).format("ddd");
            return <WeekDay day={day}></WeekDay>;
          })}
        </div>
        <div style={{ display: "flex", height: "112px" }}>
          {data.result.map((item, weekIndex) => {
            return (
              <div key={weekIndex}>
                {item.items.map(({ date, contributions }, dayIndex) => {
                  return (
                    <Tooltip
                      trigger="click"
                      title={
                        <div>
                          <div>{`${contributions} Contributions`}</div>
                          <div>{`${moment(date).format(
                            "dddd, MMMM D, YYYY"
                          )}`}</div>
                        </div>
                      }
                    >
                      <Cell
                        key={dayIndex}
                        color={getColorByContribution(contributions)}
                      />
                    </Tooltip>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "15px",
          alignItems: "center",
          width: "167px",
          justifyContent: "space-between",
          marginLeft: "20.45px",
        }}
      >
        <p style={{ color: "#959494", margin: "0px", fontSize: "8px" }}>
          Меньше
        </p>
        <div style={{ display: "flex" }}>
          <Cell color={"#EDEDED"}></Cell>
          <Cell color={"#ACD5F2"}></Cell>
          <Cell color={"#7FA8C9"}></Cell>
          <Cell color={"#527BA0"}></Cell>
          <Cell color={"#254E77"}></Cell>
        </div>
        <p style={{ color: "#959494", margin: "0px", fontSize: "8px" }}>
          Больше
        </p>
      </div>
    </>
  );
}
