"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";
import { Controller } from "react-hook-form";

function Dates({ text, control, name }: { text: string; control: any; name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="min-w-full justify-between py-6 cursor-pointer"
            >
              {value ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 opacity-50 hover:opacity-100 text-xs">
                    <CalendarDays />
                    <span>{text}</span>
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
                  <span>{text}</span>
                </div>
              )}
            </Button>
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
