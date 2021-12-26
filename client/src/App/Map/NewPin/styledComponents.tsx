import styled, { css } from "styled-components";
import { sharedPopupContainer } from "../styledComponents";

const sharedInputTextarea = css`
  border: none;
  border-bottom: 1px solid gray;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 12px;
    color: #d3cfcf;
  }
  :-ms-input-placeholder {
    color: #d3cfcf;
  }
`;

const AddPinButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: ${({ disabled }) => (disabled ? "#666666" : "#fff")};
  background-color: ${({ disabled }) => (disabled ? "#cccccc" : "tomato")};
  cursor: pointer;
`;

const NewPinForm = styled.form`
  ${sharedPopupContainer};
  justify-content: space-between;
`;

const RatingSelect = styled.select``;

const TitleInput = styled.input`
  ${sharedInputTextarea}
`;

const ReviewTextarea = styled.textarea`
  ${sharedInputTextarea}
`;

export { AddPinButton, NewPinForm, RatingSelect, ReviewTextarea, TitleInput };
