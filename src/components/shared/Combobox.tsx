"use client";

import React, { useState } from "react";
import { Controller } from "react-hook-form";
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
  control: any;
  name: string;
  icon: React.ReactNode;
  data: any[];
  title: string;
  info: string;
};

function Combobox({ control, name, icon, data, title, info }: ComboBoxProps) {
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
              <CommandInput placeholder={`Select ${info}...`} className="h-9" />
              <CommandList>
                <CommandEmpty>No {info} found.</CommandEmpty>
                <CommandGroup>
                  {data.map(({ id, name }) => (
                    <CommandItem
                      key={id}
                      value={name}
                      onSelect={() => {
                        onChange(name);
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
      )}
    />
  );
}

export default Combobox;
