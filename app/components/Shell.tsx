"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const paddingTop = pathname === "/" ? "0px" : "80px";
  return <main style={{ paddingTop }}>{children}</main>;
}
