"use client";
import React from "react";

export default function DemoBudgetCard() {
  const [spend, setSpend] = React.useState(40);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="budget-slider" className="text-gray-700 font-medium">
        Monthly Savings: <span className="text-emerald-600 font-bold">₹{100 - spend}00</span>
      </label>
      <input
        id="budget-slider"
        type="range"
        min={0}
        max={100}
        value={spend}
        onChange={e => setSpend(Number(e.target.value))}
        className="w-full accent-emerald-500"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>Spending: <span className="text-yellow-500 font-bold">₹{spend}00</span></span>
        <span>Savings: <span className="text-emerald-600 font-bold">₹{100 - spend}00</span></span>
      </div>
    </div>
  );
}
