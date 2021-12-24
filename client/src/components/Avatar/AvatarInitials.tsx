import { forwardRef } from "react";
import styled from "styled-components";

import { ImageContainer } from "./styledComponents";

const AvatarCircleInitials = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  color: rgb(18, 18, 18);
  background-color: rgb(255, 254, 255);
`;

interface AvatarInitialsProps {
  onClick: () => void;
}

const AvatarInitials = forwardRef(({ onClick }: AvatarInitialsProps, ref) => (
  <ImageContainer ref={ref as any}>
    <AvatarCircleInitials onClick={onClick}>KV</AvatarCircleInitials>
  </ImageContainer>
));

export default AvatarInitials;
