import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { signValidationSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSignupField } from "@/types";
import { useSignUpMutation } from "@/redux/api/api";

const Signup = () => {
  const [signUpFn, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupField>({
    resolver: zodResolver(signValidationSchema),
  });

  const onSubmit = async (values: FieldValues) => {
    const response = await signUpFn(values);
    if (response.data.success) {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="flex  justify-center items-center full-screen">
        <Card className="w-full lg:w-1/4 mx-auto">
          <CardContent>
            <h3 className="text-2xl text-center font-bold my-10">Signup</h3>
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="mb-3">
                <Label>Name</Label>
                <Input type="text" className="mt-1" {...register("name")} />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Email</Label>
                <Input type="text" className="mt-1" {...register("email")} />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Password</Label>
                <Input type="text" className="mt-1" {...register("password")} />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Confirm Password</Label>
                <Input
                  type="text"
                  className="mt-1"
                  {...register("confirm_password")}
                />
                {errors.confirm_password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
              <Link className="hover:underline" to="/login">
                Already have an account?
              </Link>
              <Button className="w-full my-5 ">
                <span className="flex items-center">
                  {isLoading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  ) : (
                    <span>Signup</span>
                  )}
                </span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
