"use client";

import React, { useState } from "react";
import { destinations } from "@/utils/constants";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

import Combobox from "@/components/shared/Combobox";
import NumberStepper from "@/components/shared/NumberStepper";

function ReturnTrip() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full mb-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Combobox
        icon={<FaPlaneDeparture />}
        data={destinations}
        title="Where From?"
      />
      <Combobox
        icon={<FaPlaneArrival />}
        data={destinations}
        title="Where To?"
      />
      <NumberStepper />
    </div>
  );
}

export default ReturnTrip;
