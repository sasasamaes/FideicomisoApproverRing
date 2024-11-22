"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useInitializeEscrowHook } from "./hooks/initialize-escrow.hook";

export function InitializeEscrowForm() {
  const { form, onSubmit } = useInitializeEscrowHook();

  return (
    <div
      className="w-full max-w-lg mx-auto p-8 rounded-lg shadow-lg"
      style={{
        background: "linear-gradient(to bottom left, #33471E 10%, #132864 100%)",
      }}
    >
      <h2 className="text-white text-xl font-semibold mb-4">Create Escrow</h2>
      <p className="text-gray-300 text-sm mb-6">
        Fill in the details below to set up a secure and reliable escrow
        agreement.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <FormField
            control={form.control}
            name="engagementId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Engagement</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the engagement" {...field} />
                </FormControl>
                <FormDescription className="text-gray-400">
                  This engagement will help you identify the escrows associated
                  with a service provider.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the description" {...field} />
                </FormControl>
                <FormDescription className="text-gray-400">
                  Describe the escrow.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceProvider"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Service Provider</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the service provider" {...field} />
                </FormControl>
                <FormDescription className="text-gray-400">
                  Please enter the wallet of the service provider.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the amount of the entire escrow"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-gray-400">
                  Please enter the amount/price of the escrow.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button className="bg-white text-black font-medium py-1 px-4 rounded-full shadow-md hover:shadow-lg transition text-sm">
              Create escrow
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
