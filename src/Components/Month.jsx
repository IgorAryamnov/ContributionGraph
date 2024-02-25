import moment from "moment/moment";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 31px;
  margin: 2px;
  height: 15px;
  border: 1px solid transparent;
  font-size: 12px;
  color: #959494;
`;

export function Month(month) {
  let formatedMonth = moment(month.month).format("MMM");
  return <StyledDiv>{formatedMonth}</StyledDiv>;
}
