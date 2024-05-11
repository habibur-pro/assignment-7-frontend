import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateSupplyMutation } from "@/redux/api/api";
import { TSupplyField } from "@/types";
import { supplyCreateValidation } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateSupply = () => {
  const navigate = useNavigate();
  const [addSupply, { isLoading }] = useCreateSupplyMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSupplyField>({
    resolver: zodResolver(supplyCreateValidation),
  });

  const onSubmit = async (values: FieldValues) => {
    const allValue = { ...values, quantity: parseInt(values.quantity) };
    const response = await addSupply(allValue);
    if (response.data.status === 200) {
      navigate("/dashboard/all-supply");
    }
    // login({
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    // });
  };
  return (
    <div>
      <div className="flex  justify-center items-center full-screen">
        <Card className="w-full lg:w-1/2 mx-auto">
          <CardContent>
            <h3 className="text-2xl text-center font-bold my-10">Add Supply</h3>
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="mb-3">
                <Label>Title</Label>
                <Input type="text" className="mt-1" {...register("title")} />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Category</Label>
                <Input type="text" className="mt-1" {...register("category")} />
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Image</Label>
                <Input type="text" className="mt-1" {...register("image")} />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Quantity</Label>
                <Input
                  type="number"
                  className="mt-1"
                  {...register("quantity")}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.quantity.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Description</Label>
                <Textarea className="mt-1" {...register("description")} />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button className="w-full my-5">
                {isLoading ? <LoaderCircle /> : "Add Supply"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateSupply;
