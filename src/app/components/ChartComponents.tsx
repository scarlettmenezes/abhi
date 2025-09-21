"use client";
import React from "react";

// Fallback component for when charts can't load
const ChartFallback = ({ title }: { title: string }) => (
  <div className="w-full h-[250px] flex items-center justify-center bg-gray-50 rounded-lg">
    <div className="text-center">
      <div className="text-4xl mb-2">📊</div>
      <p className="text-gray-600">{title} Chart</p>
      <p className="text-sm text-gray-400">Loading...</p>
    </div>
  </div>
);

export function BudgetPieChart({ data }: { data: { name: string; value: number; color: string }[] }) {
  const [isClient, setIsClient] = React.useState(false);
  
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <ChartFallback title="Budget Pie" />;
  }

  try {
    const { PieChart, Pie, Cell, ResponsiveContainer } = require("recharts");
    
    return (
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  } catch (error) {
    return <ChartFallback title="Budget Pie" />;
  }
}

export function SavingsBarChart({ data }: { data: { month: string; savings: number }[] }) {
  const [isClient, setIsClient] = React.useState(false);
  
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <ChartFallback title="Savings Bar" />;
  }

  try {
    const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = require("recharts");
    
    return (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="savings" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    );
  } catch (error) {
    return <ChartFallback title="Savings Bar" />;
  }
}

export function PortfolioLineChart({ data }: { data: { date: string; value: number }[] }) {
  const [isClient, setIsClient] = React.useState(false);
  
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <ChartFallback title="Portfolio Line" />;
  }

  try {
    const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = require("recharts");
    
    return (
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#facc15" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  } catch (error) {
    return <ChartFallback title="Portfolio Line" />;
  }
}
