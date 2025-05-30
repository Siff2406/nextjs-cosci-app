"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("กรุณากรอกอีเมลที่ถูกต้อง"),
  password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
});

const Login01Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async(form: z.infer<typeof formSchema>) => {
    await authClient.signIn.email({ // user name -> required
            email: form.email, // user email address
            password: form.password, // user password -> min 8 characters by default
        }, {
            onRequest: (ctx) => {
                //show loading
                console.log(ctx.body);
            },
            onSuccess: (ctx) => {
                //redirect to the dashboard or sign in page
                console.log(ctx.data);
                router.replace("/dashboard");
            },
            onError: (ctx) => {
                // display the error message
                alert(ctx.error.message);
            },
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center">
        <p className="mt-4 text-xl font-bold tracking-tight">
          Login to COSCI online store
        </p>

        <div className="my-7 w-full flex items-center justify-center overflow-hidden">
        </div>

        <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full">
              Continue with Email
            </Button>
          </form>
        </Form>

        <div className="mt-5 space-y-5">
          <p className="text-sm text-center">
            Don&apos;t have an account?
            <Link href="/signup" className="ml-1 underline text-muted-foreground">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login01Page;
