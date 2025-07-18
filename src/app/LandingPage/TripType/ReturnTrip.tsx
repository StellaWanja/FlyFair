"use client";

import React from "react";
import { destinations } from "@/utils/constants";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import Combobox from "@/components/shared/Combobox";
import NumberStepper from "@/components/shared/NumberStepper/NumberStepper";
import Dates from "@/components/shared/Dates";
import { Button } from "@/components/ui/button";

function ReturnTrip() {
  const { handleSubmit, control, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  // ADD VALIDATION

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mb-6 grid grid-cols-1 lg:grid-cols-3 gap-4"
    >
      <Combobox
        control={control}
        name="from"
        icon={<FaPlaneDeparture />}
        data={destinations}
        title="Where From?"
        info="airports"
      />
      <Combobox
        control={control}
        name="to"
        icon={<FaPlaneArrival />}
        data={destinations}
        title="Where To?"
        info="airports"
      />

      <NumberStepper control={control} name="passengerCount" />
      <Dates text="Depart Date" control={control} name="departDate" />
      <Dates text="Return Date" control={control} name="returnDate" />

      <Button
        variant={"default"}
        className="min-w-full text-center py-6 cursor-pointer"
      >
        Search Flights
      </Button>
    </form>
  );
}

export default ReturnTrip;
