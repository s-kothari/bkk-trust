"use client";
import React, { useState } from "react";
import Header from "@/components/header";

export default function HeaderShell() {
  const [isLocked, setIsLocked] = useState(false);
  return <Header isLocked={isLocked} setIsLocked={setIsLocked} />;
}
