import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

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

        <main className="mb-16 flex-1 overflow-hidden  border-b-2	 pt-20 ">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
