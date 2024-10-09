"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/useSidebar";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { useModal } from "@/hooks/useModal";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const { setModal } = useModal();

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  return (
    <nav
      className={cn(
        `relative left-0 z-10 mb-8 hidden  w-[93px]  flex-none   border-b-2 border-r-2	 pt-6 md:block `,
        className,
      )}
      style={{ borderBottomLeftRadius: "2rem" }}
    >
      <div>
        <div className="">
          <div className="mt-0 space-y-1">
            <nav className="grid items-start justify-items-center gap-10">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setModal(true)}
                className="h-16 w-16 rounded-md border border-white bg-blue-950 hover:bg-blue-900"
              >
                <TextAlignJustifyIcon className="h-8 w-8 stroke-white" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
