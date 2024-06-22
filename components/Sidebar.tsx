"use client"

import React from "react";
import sidebarElements from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const currElement = usePathname();
  return (
    <section className="sticky left-0 top-0 w-fit min-h-screen bg-blue-400">
      <div className="flex flex-col md:gap-y-6 justify-around items-center p-4">
        {sidebarElements.map((element, index) => {
          const isCurrent =
            element.route === currElement ||
            currElement.startsWith(element.route);
          return (
            <Link
              href={element.imgUrl}
              key={index}
              className={cn("bg-black p-4 text-white  rounded-md", {
                "bg-blue-600": isCurrent,
              })}
            >
              {element.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
