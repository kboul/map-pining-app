import styled, { css } from "styled-components";

const sharedPopupContainer = css`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  color: tomato;
  font-size: 13px;
  border-bottom: 0.5px solid tomato;
  width: max-content;
`;

export { Label, sharedPopupContainer };
