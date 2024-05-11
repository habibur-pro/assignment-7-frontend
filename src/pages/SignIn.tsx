import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { loginValidationSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginField } from "@/types";
import { useLoginMutation } from "@/redux/api/api";
import { LoaderCircle } from "lucide-react";

const SignIn = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginField>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit = async (values: FieldValues) => {
    const response = await login({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (response?.data?.status === 200) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="flex  justify-center items-center full-screen">
        <Card className="w-full lg:w-1/4 mx-auto">
          <CardContent>
            <h3 className="text-2xl text-center font-bold my-10">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} action="">
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

              <Link className="hover:underline" to="/sign-up">
                Have no account signup?
              </Link>
              {error && (
                <p className="text-red-500 tex-center my-3">
                  something went wrong
                </p>
              )}
              <Button className="w-full my-5">
                {isLoading ? <LoaderCircle /> : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
