import { forwardRef } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context";

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

const AvatarInitials = forwardRef(({ onClick }: AvatarInitialsProps, ref) => {
  const {
    state: { currentUser }
  } = useAppContext();

  return (
    <ImageContainer ref={ref as any}>
      <AvatarCircleInitials onClick={onClick}>
        {currentUser.substring(0, 2).toUpperCase()}
      </AvatarCircleInitials>
    </ImageContainer>
  );
});

export default AvatarInitials;
