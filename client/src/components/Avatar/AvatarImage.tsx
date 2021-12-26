import { forwardRef } from "react";
import { Image } from "react-bootstrap";

import { ImageContainer } from "./styledComponents";

interface AvatarImageProps {
  onClick: () => void;
}

// Source: https://codediode.io/lessons/198632-default-avatars-with-username-initials
const AvatarImage = forwardRef(({ onClick }: AvatarImageProps, ref) => (
  <ImageContainer ref={ref as any}>
    <Image
      width="40"
      height="40"
      src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
      roundedCircle
      onClick={onClick}
    />
  </ImageContainer>
));

export default AvatarImage;
