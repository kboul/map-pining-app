import { Button, Modal } from "flowbite-react";
import { ReactNode } from "react";

type AppModalProps = {
  actionBtnDisabled?: boolean;
  children: ReactNode;
  onAction: () => void;
  onClose: () => void;
  show: boolean;
  title: string;
};

export default function AppModal({
  actionBtnDisabled,
  children,
  onAction,
  onClose,
  show,
  title
}: AppModalProps) {
  return (
    <Modal className="z-[1000]" dismissible show={show} onClose={onClose}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className="justify-end">
        <Button onClick={onClose}>Close</Button>
        <Button disabled={actionBtnDisabled} onClick={onAction}>
          {title}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
