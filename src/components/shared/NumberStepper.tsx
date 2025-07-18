"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Users, Minus, Plus } from "lucide-react";

function NumberStepper() {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

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
              {adults + children + infant > 1
                ? `${adults + children + infant} Passengers`
                : `${adults + children + infant} Passenger`}
            </div>
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full" align="start">
        <NumberInput
          title="Adults"
          text="Age 12+"
          passengerNumber={adults}
          setPassengerNumber={setAdults}
          min={1}
          max={9}
        />
        <NumberInput
          title="Children"
          text="Age 2-11"
          passengerNumber={children}
          setPassengerNumber={setChildren}
          min={0}
          max={9}
        />
        <NumberInput
          title="Infant"
          text="Ages under 2"
          passengerNumber={infant}
          setPassengerNumber={setInfant}
          incrementDisabled={infant >= adults}
          decrementDisabled={infant <= 0}
          min={0}
          max={9}
        />
      </PopoverContent>
    </Popover>
  );
}

function NumberInput({
  passengerNumber,
  setPassengerNumber,
  title,
  text,
  incrementDisabled = false,
  decrementDisabled = false,
  min,
  max,
}: {
  passengerNumber: number;
  setPassengerNumber: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  text: string;
  incrementDisabled?: boolean;
  decrementDisabled?: boolean;
  min: number;
  max: number;
}) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-gray-500">{text}</div>
        </div>
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-red-500 cursor-pointer"
            onClick={() =>
              setPassengerNumber(Math.max(min, passengerNumber - 1))
            }
            disabled={decrementDisabled || passengerNumber <= min}
          >
            <Minus className="h-4 w-4 disabled:cursor-not-allowed" />
          </Button>
          <span className="w-8 text-center">{passengerNumber}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-red-500 cursor-pointer"
            onClick={() =>
              setPassengerNumber(Math.min(max, passengerNumber + 1))
            }
            disabled={incrementDisabled || passengerNumber >= max}
          >
            <Plus className="h-4 w-4 disabled:cursor-not-allowed" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NumberStepper;
