"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { destinations } from "@/utils/constants";
import { IoMdPerson } from "react-icons/io";
import ReturnTrip from "./TripType/ReturnTrip";

function Form() {
  const [tripType, setTripType] = useState("return-trip");
  const { register, control } = useForm<FormData>();

  return (
    <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl animate-scale-in">
      <CardHeader>
        <div className="flex gap-2">
          <Button
            variant={tripType === "return-trip" ? "default" : "outline"}
            onClick={() => setTripType("return-trip")}
            className="cursor-pointer"
          >
            Return Trip
          </Button>
          <Button
            variant={tripType === "one-way" ? "default" : "outline"}
            onClick={() => setTripType("one-way")}
            className="cursor-pointer"
          >
            One Way
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {tripType === "return-trip" && <ReturnTrip />}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Select>
            <SelectTrigger className=" focus:outline-none">
              <SelectValue
                placeholder={
                  <div className="flex items-center gap-2">
                    <FaPlaneDeparture />
                    <span>Where From?</span>
                  </div>
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {destinations.map(({ name, nickname }) => (
                  <SelectItem key={nickname} value={nickname}>
                    {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="focus:outline-none">
              <SelectValue
                placeholder={
                  <div className="flex items-center gap-2">
                    <FaPlaneArrival />
                    <span>Where To?</span>
                  </div>
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {destinations.map(({ name, nickname }) => (
                  <SelectItem key={nickname} value={nickname}>
                    {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="focus:outline-none">
              <SelectValue
                placeholder={
                  <div className="flex items-center gap-2">
                    <IoMdPerson />
                    <span>Passengers</span>
                  </div>
                }
              />
            </SelectTrigger>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}

export default Form;
