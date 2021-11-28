import { ReactNode } from "react";
import { Dropdown } from "react-bootstrap";

import AvatarInitials from "./AvatarInitials";

interface AvatarProps {
  children: ReactNode;
}

export default function Avatar({ children }: AvatarProps) {
  return (
    <Dropdown>
      <Dropdown.Toggle as={AvatarInitials} />
      <Dropdown.Menu align="end">{children}</Dropdown.Menu>
    </Dropdown>
  );
}
