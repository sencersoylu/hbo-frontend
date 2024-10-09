"use client";
//import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from "./user-nav";
import Link from "next/link";
import moment from "moment";
import { useEffect, useState } from "react";
export default function Footer() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(moment().format("DD.MM.YYYY HH:mm:ss"));
  }, []);

  setInterval(() => {
    setCurrentDate(moment().format("DD.MM.YYYY HH:mm:ss"));
  }, 1000);

  return (
    <>
      <footer className="fixed inset-x-0 bottom-0  ">
        <div className="container mx-auto h-8">
          <div className="Hipertech absolute left-[560px]  text-center font-['Raleway'] text-2xl font-bold leading-loose tracking-tight text-white ">
            Hipersoft by Soylu
          </div>
          <div className="0220231822 absolute left-[1100px]  font-['Raleway'] text-2xl font-bold uppercase leading-loose tracking-tight text-zinc-300">
            {currentDate}
          </div>
        </div>
      </footer>
    </>
  );
}
