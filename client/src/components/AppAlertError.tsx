import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export default function AppAlertError({ error }: { error: string }) {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      {error}
    </Alert>
  );
}
