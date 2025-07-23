import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { regions, services, testimonials } from "@/utils/constants";
import { Star } from "lucide-react";
import Link from "next/link";

function About() {
  return (
    <>
      {/* About */}
      <section className="w-full py-20 px-12 lg:px-24 ">
        <h2 className="text-4xl text-center font-bold font-heading text-gray-900 mb-4">
          Where we serve
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
          Connecting small communities with reliable regional air services
          across diverse landscapes
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64">
                <Image
                  src={`https://images.unsplash.com/${region.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={region.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {region.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {region.description}
                </p>
                <div className="space-y-2">
                  {region.features.map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="mr-2 text-xs"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-20 px-12 lg:px-24 ">
        <h2 className="text-4xl text-center font-bold font-heading text-gray-900 mb-4">
          Why Choose FlyFair
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
          Experience the difference with our premium services and amenities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-[#005883] rounded-full mb-4 group-hover:bg-[#005883] group-hover:text-white transition-colors duration-300">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full px-12 lg:px-24 py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <h2 className="text-4xl text-center font-bold font-heading text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Real experiences from real travelers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-12 lg:px-24 py-20 bg-[#005883] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of satisfied travelers and book your dream destination
            today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={"/"}
              className="bg-gray-50 px-8 py-3 text-[#005883] hover:bg-gray-200 rounded-sm transition-colors duration-150"
            >
              Book Now
            </Link>
            <Link
              href={"/"}
              className="bg-gray-50 px-8 py-3 text-[#005883] hover:bg-gray-200 rounded-sm transition-colors duration-150"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
