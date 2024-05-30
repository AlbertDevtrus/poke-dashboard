"use client";

import { useAppSelector } from "@/app/store";
import { SimpleWidget } from "./SimpleWidget";

export function WidgetsGrid() {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 gap-4 justify-center">
      <SimpleWidget title={count} />
    </div>
  );
}
