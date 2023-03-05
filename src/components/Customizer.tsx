"use client";

import { state } from "@/store";
import { useSnapshot } from "valtio";

export default function Customizer() {
  const snap = useSnapshot(state);

  return (
    <div className="absolute top-0 right-4 w-auto h-full">
      <div className="customizer">
        <div className="color-options">
          {snap.colors.map((color) => (
            <div
              key={color}
              className={`circle ${snap.color === color ? "border-black" : ""}`}
              style={{ background: color }}
              onClick={() => (state.color = color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
