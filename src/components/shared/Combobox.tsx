"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa";

type ComboBoxProps = {
  icon: React.ReactNode;
  data: any[];
  title: string;
};

function Combobox({ icon, data, title }: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
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
                {icon}
                <span>{title}</span>
              </div>
              <div className="opacity-100">
                {data.find((val) => val.name === value)?.name.slice(0, 25)}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 opacity-50 hover:opacity-100">
              {icon}
              <span>{title}</span>
            </div>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Select Airport..." className="h-9" />
          <CommandList>
            <CommandEmpty>No airport found.</CommandEmpty>
            <CommandGroup>
              {data.map(({ id, name }) => (
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
  );
}

export default Combobox;
