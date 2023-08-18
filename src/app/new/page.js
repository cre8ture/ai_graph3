"use client";
import Graph from "../../components/graph/ClearGraph";
import { useState } from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <Graph />
      </div>
    </main>
  );
}
