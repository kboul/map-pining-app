import { forwardRef } from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

const ImageContainer = styled.div`
  cursor: pointer;
`;

interface CustomToggleProps {
  onClick: () => void;
}

const CustomToggle = forwardRef(({ onClick }: CustomToggleProps, ref) => (
  <ImageContainer ref={ref as any}>
    <Image
      width="32"
      height="32"
      src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
      roundedCircle
      onClick={onClick}
    />
  </ImageContainer>
));

export default CustomToggle;
