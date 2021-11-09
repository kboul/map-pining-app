import styled from "styled-components";

const PopupInfo = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Label = styled.span`
  color: tomato;
  font-size: 13px;
  border-bottom: 0.5px solid tomato;
  width: max-content;
`;

const Description = styled.span`
  font-size: 14px;
  margin: 0px;
`;

const Place = styled.h3`
  margin: 0px;
`;

const Star = styled.span`
  color: gold;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const User = styled.div`
  font-size: 14px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Date = styled.span`
  font-size: 12px;
`;

export {
  Date,
  Description,
  Label,
  Place,
  PopupInfo,
  Star,
  StarContainer,
  User,
  Username
};
