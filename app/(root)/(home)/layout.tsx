import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return(
    <main className="relative">
        <Navbar />
        <Sidebar />
        <section className="py-6">
            <div>{children}</div>
        </section>
    </main>
  )
};

export default HomeLayout;
