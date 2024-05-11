import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TSupplyData, TSupplyUpdateField } from "@/types";
import { ReactNode } from "react";
import { Textarea } from "./textarea";
import { useUpdateSupplyMutation } from "@/redux/api/api";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supplyUpdateValidation } from "@/validation";

import { LoaderCircle } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
type TEditModalProps = {
  children: ReactNode;
  supply: TSupplyData;
};
export default function EditModal({ children, supply }: TEditModalProps) {
  const [updateSupply, { isLoading }] = useUpdateSupplyMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSupplyUpdateField>({
    resolver: zodResolver(supplyUpdateValidation),
  });

  const onSubmit = async (values: FieldValues) => {
    const allValue = { ...values, quantity: parseInt(values.quantity) };
    updateSupply({ id: supply.id, payload: allValue });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Supply</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                defaultValue={supply.title}
                className="col-span-3"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                id="image"
                defaultValue={supply.image}
                className="col-span-3"
                {...register("image")}
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                defaultValue={supply.quantity}
                className="col-span-3"
                {...register("quantity")}
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.quantity.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="quantity"
                defaultValue={supply.description}
                className="col-span-3"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">
                {isLoading ? <LoaderCircle /> : "Save Changes"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
