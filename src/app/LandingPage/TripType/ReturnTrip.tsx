"use client";

import React from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { useForm } from "react-hook-form";

import { destinations } from "@/utils/constants";
import Combobox from "@/components/shared/Combobox";
import NumberStepper from "@/components/shared/NumberStepper/NumberStepper";
import Dates from "@/components/shared/Dates";
import { Button } from "@/components/ui/button";

type ReturnTripFormData = {
  fromDestination: string;
  toDestination: string;
  passengerCount: {
    adults: number;
    children: number;
    infants: number;
  };
  departureDate: Date | null;
  returnDate: Date | null;
};

function ReturnTrip() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ReturnTripFormData>();

  const onSubmit = (formValues: ReturnTripFormData) => {
    console.log({ formValues });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-5 lg:grid-cols-3"
    >
      <Combobox
        control={control}
        name="fromDestination"
        icon={<FaPlaneDeparture />}
        data={destinations}
        title="Where From?"
        info="airports"
        error={errors.fromDestination}
      />
      <Combobox
        control={control}
        name="toDestination"
        icon={<FaPlaneArrival />}
        data={destinations}
        title="Where To?"
        info="airports"
        error={errors.toDestination}
      />

      <NumberStepper control={control} name="passengerCount" />

      <Dates
        control={control}
        name="departureDate"
        title="Departure Date"
        error={errors.departureDate}
      />
      <Dates
        control={control}
        name="returnDate"
        title="Return Date"
        error={errors.returnDate}
      />

      <Button
        type="submit"
        variant="default"
        className="min-w-full text-center py-6 cursor-pointer"
      >
        Search Flights
      </Button>
    </form>
  );
}

export default ReturnTrip;
