import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className="flex md:justify-around gap-x-4 p-4 bg-neutral-800 text-white border-b-2 border-orange-600">
        <Link href={""}>Home</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link href={""}>Creator</Link>
        <Link href={""}>Testimonials</Link>
        <div className="flex-between gap-5">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
