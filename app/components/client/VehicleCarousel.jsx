"use client"

import { useState } from "react"
import Image from "next/image"
import Card from "../ui/Card"
import Button from "../ui/Button"

export default function VehicleCarousel({ vehicles }) {
  const [activeVehicle, setActiveVehicle] = useState(0)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {vehicles.map((vehicle, i) => (
        <Card
          key={i}
          className={`overflow-hidden cursor-pointer transition-all ${
            activeVehicle === i ? "ring-2 ring-accent" : ""
          }`}
          onClick={() => setActiveVehicle(i)}
        >
          <Image
            src={vehicle.image || "/placeholder.svg"}
            alt={vehicle.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="font-bold text-lg mb-2">{vehicle.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Confort et performance exceptionnels
            </p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              En savoir plus
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

