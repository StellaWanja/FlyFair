"use client";

import React, { useState } from "react";
import { Controller, FieldError } from "react-hook-form";
import { CalendarDays } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

function Dates({
  title,
  control,
  name,
  error,
}: {
  title: string;
  control: any;
  name: string;
  error: FieldError | undefined;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: `Select a date` }}
      render={({ field: { value, onChange } }) => (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="relative ">
              {error && (
                <p className="mt-1 text-left text-red-500 absolute -top-6">{error.message}</p>
              )}
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={cn(
                  "min-w-full justify-between py-6 cursor-pointer",
                  error && "border-red-500"
                )}
              >
                {value ? (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 opacity-50 hover:opacity-100 text-xs">
                      <CalendarDays />
                      <span>{title}</span>
                    </div>
                    <div className="opacity-100">
                      {value.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center last:justify-end gap-2 opacity-50 hover:opacity-100">
                    <CalendarDays />
                    <span>{title}</span>
                  </div>
                )}
              </Button>
            </div>
          </PopoverTrigger>

          <PopoverContent className="w-full" align="start">
            <Calendar
              mode="single"
              selected={value}
              captionLayout="dropdown"
              onSelect={(date) => {
                onChange(date);
                setOpen(false);
              }}
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      )}
    />
  );
}

export default Dates;
