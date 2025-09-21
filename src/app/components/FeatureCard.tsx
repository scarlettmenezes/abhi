import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}

export default function FeatureCard({ icon, title, desc, className = "" }: FeatureCardProps) {
  return (
    <div className={`rounded-xl shadow-lg p-6 bg-white flex flex-col items-center text-center border border-gray-100 hover:shadow-emerald-200 transition-shadow ${className}`}>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-emerald-600">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
