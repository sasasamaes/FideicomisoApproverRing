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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UseFormReturn } from "react-hook-form";

interface FormFieldInterface {
  name: string;
  label: string;
  placeholder: string;
  description?: string;
}

interface ClaimEscrowFormProps {
  title: string;
  subtitle: string;
  fields: FormFieldInterface[];
  // biome-ignore lint/suspicious/noExplicitAny: Use a specific type for form values instead of 'any' for better type safety
  form: UseFormReturn<any>;
  // biome-ignore lint/suspicious/noExplicitAny: Use a specific type for the values parameter to ensure type safety
  onSubmit: (values: any) => void;
  submitButtonText: string;
  className?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

export function ClaimEscrowForm({
  title,
  subtitle,
  fields,
  form,
  onSubmit,
  submitButtonText,
  className = "",
  gradientFrom = "from-slate-900",
  gradientVia = "via-slate-800",
  gradientTo = "to-green-900",
}: ClaimEscrowFormProps) {
  return (
    <div className="w-full p-4 md:p-0">
      <Card
        className={`w-full mx-auto bg-gradient-to-tr ${gradientFrom} ${gradientVia} ${gradientTo} shadow-[4px_8px_32px_rgba(0,0,0,0.35)] rounded-2xl ${className}`}
      >
        <CardHeader className="space-y-4 p-8 md:p-10">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-medium text-white">
              {title}
            </CardTitle>
            <p className="text-xl text-white/70">{subtitle}</p>
          </div>
        </CardHeader>
        <CardContent className="p-8 md:p-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-8"
            >
              {fields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  render={({ field: formField }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="text-xl font-medium text-white">
                        {field.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={field.placeholder}
                          className="bg-white/5 border-white/10 text-white border-white placeholder:text-white/50 h-14 text-lg rounded-small"
                          {...formField}
                        />
                      </FormControl>
                      {field.description && (
                        <p className="text-xl text-white/70">
                          {field.description}
                        </p>
                      )}
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
              ))}
              <div className="flex justify-end pt-6">
                <Button
                  type="submit"
                  className="bg-white text-slate-900 hover:bg-white/90 px-8 h-12 text-sm font-medium rounded-full"
                >
                  {submitButtonText}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
