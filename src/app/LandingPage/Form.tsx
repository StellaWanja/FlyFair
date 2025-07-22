"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ReturnTrip from "./TripType/ReturnTrip";
import OneWay from "./TripType/OneWay";

function Form() {
  const [tripType, setTripType] = useState("return-trip");

  return (
    <Card className="min-w-2xs md:min-w-md lg:min-w-3xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl animate-scale-in">
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
        {tripType === "one-way" && <OneWay />}
      </CardContent>
    </Card>
  );
}

export default Form;
