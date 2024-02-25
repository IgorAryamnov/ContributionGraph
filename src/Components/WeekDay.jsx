import styled from "styled-components";

const StyledDiv = styled.div`
  width: 15.85px;
  height: 15.6px;
  margin: 1px;
  vertical-align: middle;
  color: #959494;
  font-size: 12px;
`;
const DayNames = {
  Mon: "Пн",
  Wed: "Ср",
  Fri: "Пт",
};

export function WeekDay({ day }) {
  return <StyledDiv>{DayNames[day]}</StyledDiv>;
}
