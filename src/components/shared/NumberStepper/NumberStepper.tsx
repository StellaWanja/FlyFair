"use client";

import React, { useState } from "react";
import { Controller, useWatch } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import NumberInput from "./NumberInput";

function NumberStepper({ control, name }: { control: any; name: string }) {
  const [open, setOpen] = useState(false);

  const values = useWatch({
    control,
    name: name,
    defaultValue: {
      adults: 1,
      children: 0,
      infant: 0,
    },
  });

  const adults = values?.adults ?? 1;
  const children = values?.children ?? 0;
  const infant = values?.infant ?? 0;
  const total = adults + children + infant;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-full justify-between py-6"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 opacity-50 hover:opacity-100 text-xs">
              <Users />
              <span>Passengers</span>
            </div>
            <div className="opacity-100">
              {total > 1 ? `${total} Passengers` : `${total} Passenger`}
            </div>
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full" align="start">
        <Controller
          control={control}
          name={`${name}.adults`}
          defaultValue={1}
          render={({ field }) => (
            <NumberInput
              title="Adults"
              text="Age 12+"
              value={field.value}
              onChange={field.onChange}
              min={1}
              max={9}
            />
          )}
        />
        <Controller
          control={control}
          name={`${name}.children`}
          defaultValue={0}
          render={({ field }) => (
            <NumberInput
              title="Children"
              text="Age 2-11"
              value={field.value}
              onChange={field.onChange}
              min={0}
              max={9}
            />
          )}
        />
        <Controller
          control={control}
          name={`${name}.infant`}
          defaultValue={0}
          render={({ field }) => (
            <NumberInput
              title="Infant"
              text="Ages under 2"
              value={field.value}
              onChange={field.onChange}
              incrementDisabled={field.value >= adults}
              decrementDisabled={field.value <= 0}
              min={0}
              max={9}
            />
          )}
        />
      </PopoverContent>
    </Popover>
  );
}
export default NumberStepper;
