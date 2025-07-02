"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select'

import { AirportEnum } from "@/utils/constants";

type FormData = {
  departureAirport: AirportEnum;
  arrivalAirport: AirportEnum;
  departureDate: Date;
  returnDate?: Date;
  trip: string;
};

function Form() {
  const { register } = useForm<FormData>();

  const airportOptions = Object.values(AirportEnum);

  return (
    <div className="bg-white rounded-3xl p-8">
      <h3 className="text-xl font-semibold">Where are you flying?</h3>

      <div>
        <label>Departure Airport</label>
        <Select options={airportOptions} />
        {/* <select {...register("departureAirport")} defaultValue="">
          <option value="" disabled>
            -- Select airport --
          </option>
          {airportOptions.map((airport) => (
            <option key={airport} value={airport}>
              {airport}
            </option>
          ))}
        </select> */}
      </div>
      <div>
        <label>Arrival Airport</label>
        <select {...register("departureAirport")} defaultValue="">
          <option value="" disabled>
            -- Select airport --
          </option>
          {airportOptions.map((airport) => (
            <option key={airport} value={airport}>
              {airport}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Form;
