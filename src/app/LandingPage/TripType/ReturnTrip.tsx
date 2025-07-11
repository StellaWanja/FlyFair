"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { destinations } from "@/utils/constants";
import { FaPlaneDeparture, FaCheck } from "react-icons/fa";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

function ReturnTrip() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full mb-6">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="min-w-full justify-between py-6"
          >
            {value ? (
              <div className="space-y-1">
                <div className="flex items-center gap-2 opacity-50 hover:opacity-100 text-xs">
                  <FaPlaneDeparture />
                  <span>Where From?</span>
                </div>
                <div className="opacity-100">
                  {
                    destinations.find(
                      (destination) => destination.name === value
                    )?.name
                  }
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 opacity-50 hover:opacity-100">
                <FaPlaneDeparture />
                <span>Where From?</span>
              </div>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Select Airport..." className="h-9" />
            <CommandList>
              <CommandEmpty>No airport found.</CommandEmpty>
              <CommandGroup>
                {destinations.map(({ id, name }) => (
                  <CommandItem
                    key={id}
                    value={name}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {name}
                    <FaCheck
                      className={cn(
                        "ml-auto",
                        name === value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ReturnTrip;
