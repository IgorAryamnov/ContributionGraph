import { forwardRef } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 14px;
  width: 14px;
  border: 1px solid rgba(0, 0, 0, 0);
  margin: 1px;
  &:hover {
    border: 1px solid #00000080;
  }
`;

export const Cell = forwardRef(({ color, ...restProps }, ref) => {
  let style = {
    backgroundColor: color,
  };

  return <StyledDiv style={style} ref={ref} {...restProps}></StyledDiv>;
});
