import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

type NumberInputProps = {
  value: number;
  onChange: (value: number) => void;
  title: string;
  text: string;
  incrementDisabled?: boolean;
  decrementDisabled?: boolean;
  min: number;
  max: number;
};

function NumberInput({
  value,
  onChange,
  title,
  text,
  incrementDisabled = false,
  decrementDisabled = false,
  min,
  max,
}: NumberInputProps) {
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
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={decrementDisabled || value <= min}
          >
            <Minus className="h-4 w-4 disabled:cursor-not-allowed" />
          </Button>
          <span className="w-8 text-center">{value}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-red-500 cursor-pointer"
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={incrementDisabled || value >= max}
          >
            <Plus className="h-4 w-4 disabled:cursor-not-allowed" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NumberInput;
