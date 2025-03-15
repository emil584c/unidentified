"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import DropDown from "@/components/fields/DropDown";
import { useState } from "react";

function TagBox({ label, color }) {
  return (
    <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-gray-800 ring-inset">
      <svg
        style={{ fill: color }}
        viewBox="0 0 6 6"
        aria-hidden="true"
        className="size-1.5 fill-red-400"
      >
        <circle r={3} cx={3} cy={3} />
      </svg>
      {label}
    </span>
  );
}

export default function ContentGrid({ items }) {
  const [selectedGame, setSelectedGame] = useState(null);

  const options = [
    { value: 'deadlock', label: 'Deadlock' },
    { value: 'dota2', label: 'Dota 2' },
    { value: 'csgo', label: 'CS:GO' },
    { value: 'lol', label: 'League of Legends' },
  ]
  
  const handleGameChange = (selectedOption) => {
    setSelectedGame(selectedOption);
  }

  return (
    <>
      <div className="w-full flex mb-4">
        <DropDown 
          placeholder={"Select a game"}
          name="Game" 
          options={options} 
          defaultValue={options[0]} 
          onChange={handleGameChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item?.title}</CardTitle>
              <CardDescription>{item?.description}</CardDescription>
              {item.image && (
                <div className="relative aspect-video w-full mt-1">
                  <Image
                    className="object-cover rounded-sm"
                    src={item?.image}
                    alt={item?.title}
                    fill={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
            </CardHeader>
            <CardContent className="relative">{item?.content}</CardContent>
            <CardFooter>
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-2 flex-wrap">
                  {item?.tags.map((tag) => (
                    <TagBox key={tag} label={tag} color="red" />
                  ))}
                </div>
                <Separator className="my-1" />
                <div>
                  {item?.actions?.map((action) => (
                    <Button variant={action.type} asChild key={action.label}>
                      <Link href={action.href}>{action.label}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
