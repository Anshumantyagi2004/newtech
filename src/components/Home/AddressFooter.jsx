import { Building2, Globe, Landmark, MapPin, Warehouse } from 'lucide-react';
import React from 'react'

export default function AddressFooter() {
    const address = [
    {
      icon: MapPin,
      title: "Head Office",
      phone: "+91-9810103197, +91-9810103697",
      text: "M5-A, DSIDC, Badli Industrial Area, Phase-1, Near Samaypur Badli Metro Rd, Rohini, Delhi - 110042",
    },
    {
      icon: Building2,
      title: "Noida Office",
      text: "1002, Tower B, ATS Bouquet, Sector 132, Noida - 201304",
      phone: "+91 1204641607, +91 88000 53240",
    },
    {
      icon: Landmark,
      title: "Telangana Branch",
      text: "Plot No.1-367/A/2/A/1, Near Ambedkar Statue, Jalpally, Hyderabad, Telangana - 500005",
      phone: "+91 9213092038, +91 7419236651",
    },
    {
      icon: Warehouse,
      title: "Mumbai Branch",
      text: "Unit no. 85, Akshay Mitta Industrial Estate, Marol, Andheri East, Mumbai - 400059",
      phone: "+91 9212622643, +91 8789178077",
    },
    {
      icon: Globe,
      title: "U.A.E Branch",
      text: "Warehouse No. 10, Plot No. 597779, Dubai Investment Park 2, Dubai, UAE",
      phone: "+971 0529217755",
    },
  ];
  return (
    <>
    <div className='w-full bg-black pt-7'>
    <div className="relative  max-w-7xl mx-auto flex flex-wrap justify-between gap-4 text-white mb-8">
        {address.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex-1 min-w-[200px] flex flex-col items-center text-center 
        p-5 rounded-xl 
        bg-white/5 backdrop-blur-lg 
        border border-white/10 
        hover:bg-white/10 transition duration-300"
            >
              {/* Icon */}
              <Icon className="w-6 h-6 text-white/70 mb-2" />

              {/* Title */}
              <h3 className="text-lg font-semibold">{item.title}</h3>

              {/* Phone */}
              <p className="text-xs text-gray-200 mt-1">{item.phone}</p>

              {/* Address */}
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </>
  )
}
