"use client";

import React from "react";
import sidebarElements from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const currElement = usePathname();
  return (
    <section className="sticky left-0 top-0 min-h-screen bg-neutral-800 w-fit flex-col justify-between p-6 pt-28 max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6 ">
        {sidebarElements.map((element, index) => {
          const isCurrent =
            element.route === currElement
          return (
            <Link
              href={element.route}
              key={index}
              className={cn("p-4 text-white rounded-md text-center", {
                "bg-orange-600": isCurrent,
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
