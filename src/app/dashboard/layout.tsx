"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <main
          className="mb-8 flex-1 overflow-hidden  border-b-2	 pt-20 "
          style={{ borderBottomRightRadius: "2rem" }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
