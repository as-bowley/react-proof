import { ReactNode } from "react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};
