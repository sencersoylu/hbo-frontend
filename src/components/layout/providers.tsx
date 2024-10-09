"use client";
import React from "react";
import { SessionProvider, type SessionProviderProps } from "next-auth/react";
import { SocketProvider } from "@/providers/SocketIOProvider";
import { TimerProvider } from "@/providers/TimerProvider";
export default function Providers({
  session,
  children,
}: {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider session={session}>
        <TimerProvider>
          <SocketProvider>{children}</SocketProvider>
        </TimerProvider>
      </SessionProvider>
    </>
  );
}
