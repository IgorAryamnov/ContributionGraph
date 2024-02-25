import moment from "moment";

export function generateTimelineData(contributions) {
  const startOfWeek = moment().startOf("week");
  const startOfRange = startOfWeek.subtract(52, "week");
  let currentMonth = moment().startOf("months").add(1, "months");

  const result = [];
  let currentWeek = moment(startOfRange);

  for (let i = 0; i < 51; i++) {
    result.push({
      startOfWeek: currentWeek,
      items: Array.from(new Array(7), (_, index) => {
        const date = moment(currentWeek).add(index, "day");
        const formatedDate = date.format("YYYY-MM-DD");
        return {
          date,
          contributions: contributions[formatedDate],
        };
      }),
    });
    currentWeek = moment(currentWeek).add(1, "week");
  }

  let resultWithMonth = [];

  for (let i = 0; i < 12; i++) {
    resultWithMonth.push({ month: currentMonth });
    currentMonth = moment(currentMonth).add(1, "month");
  }

  return { result, resultWithMonth };
}
