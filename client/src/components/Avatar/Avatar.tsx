import { ReactNode } from "react";
import { Dropdown } from "react-bootstrap";

import AvatarImage from "./AvatarImage";
import AvatarInitials from "./AvatarInitials";
import { useAppContext } from "../../context";

interface AvatarProps {
  children: ReactNode;
}

export default function Avatar({ children }: AvatarProps) {
  const {
    state: { currentUser }
  } = useAppContext();

  const MyAvatar = currentUser ? AvatarInitials : AvatarImage;

  return (
    <Dropdown>
      <Dropdown.Toggle as={MyAvatar} />
      <Dropdown.Menu align="end">{children}</Dropdown.Menu>
    </Dropdown>
  );
}
