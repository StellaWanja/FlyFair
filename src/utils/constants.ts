import { Shield, HeartPulse, Luggage, RefreshCcw } from "lucide-react";

export const destinations = [
  {
    id: 1,
    name: "Club Makokola",
    nickname: "CMK",
  },
  {
    id: 2,
    name: "Lichinga Airport",
    nickname: "FQLC",
  },
  {
    id: 3,
    name: "Likoma Island",
    nickname: "LIX",
  },
  {
    id: 4,
    name: "Karonga Airport",
    nickname: "FWKA",
  },
  {
    id: 5,
    name: "Nyika National Park",
    nickname: "CEH",
  },
  {
    id: 6,
    name: "Addis Ababa Bole International Airport",
    nickname: "HAAB",
  },
];

export const regions = [
  {
    name: "Mountain Regions",
    description: "Remote mountain communities and scenic airstrips",
    image: "photo-1469474968028-56623f02e42e",
    features: ["Scenic Routes", "Small Airstrips", "Local Communities"],
  },
  {
    name: "Coastal Villages",
    description: "Isolated coastal settlements and island communities",
    image: "photo-1482938289607-e9573fc25ebb",
    features: ["Island Hopping", "Coastal Access", "Weather Dependent"],
  },
  {
    name: "Remote Outposts",
    description: "Hard-to-reach locations requiring specialized aircraft",
    image: "photo-1472396961693-142e6e269027",
    features: ["Specialized Aircraft", "Essential Services", "All Weather"],
  },
  {
    name: "Rural Communities",
    description: "Small town connections and agricultural regions",
    image: "photo-1501854140801-50d01698950b",
    features: ["Local Economy", "Regular Service", "Community Focus"],
  },
];

export const services = [
  {
    icon: RefreshCcw,
    title: "New Brand, Trusted Legacy",
    description: "A legacy of exceptional service with a dedicated team",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Highest safety standards in the industry",
  },
  {
    icon: HeartPulse,
    title: "Ambulance Services",
    description: "Emergency medical assistance available",
  },
  {
    icon: Luggage,
    title: "Extra Baggage",
    description: "Generous baggage allowance included",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Exceptional service and comfort. The crew went above and beyond!",
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment:
      "Their air ambulance service saved my father's life. Quick response and professional staff.",
  },
  {
    name: "Emma Davis",
    rating: 5,
    comment: "Best airline experience I've ever had. Highly recommended!",
  },
];
