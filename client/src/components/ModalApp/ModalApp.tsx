import { ReactNode } from "react";
import { Button, Modal } from "react-bootstrap";

interface ModalAppProps {
  actionBtnDisabled?: boolean;
  children: ReactNode;
  onAction: () => void;
  onClose: () => void;
  show: boolean;
  title: string;
}

export default function ModalApp({
  actionBtnDisabled = false,
  children,
  onAction,
  onClose,
  show,
  title
}: ModalAppProps) {
  return (
    <Modal animation={false} centered show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant="secondary">
          Close
        </Button>
        <Button
          disabled={actionBtnDisabled}
          onClick={onAction}
          variant="primary">
          {title}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
