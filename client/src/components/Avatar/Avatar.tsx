import { ReactNode } from "react";
import { Dropdown } from "react-bootstrap";

import CustomToggle from "./CustomToggle";

interface AvatarProps {
  children: ReactNode;
}

export default function Avatar({ children }: AvatarProps) {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} />
      <Dropdown.Menu align="end">{children}</Dropdown.Menu>
    </Dropdown>
  );
}
