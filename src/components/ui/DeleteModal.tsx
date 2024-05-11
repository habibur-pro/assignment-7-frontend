import { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

import { TSupplyData } from "@/types";
import { useDeleteSupplyMutation } from "@/redux/api/api";
import { LoaderCircle } from "lucide-react";
type TSupplyModalProps = {
  children: ReactNode;
  supply: TSupplyData;
};
const DeleteModal = ({ children, supply }: TSupplyModalProps) => {
  const [deleteSupply, { isLoading }] = useDeleteSupplyMutation();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            supply post data from our server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteSupply({ id: supply.id })}>
            {isLoading ? <LoaderCircle /> : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
