import Footer from "@/components/Footer";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="self-center w-full px-3 md:w-1/2">{children}</main>
        <Footer />
      </div>
    </>
  );
}
