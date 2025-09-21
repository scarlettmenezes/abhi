import React from "react";

interface LeaderboardEntry {
  username: string;
  xp: number;
  streak: number;
}

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
}

export default function LeaderboardTable({ entries }: LeaderboardTableProps) {
  return (
    <table className="min-w-full bg-white rounded-xl shadow border border-emerald-100">
      <thead>
        <tr className="bg-emerald-50">
          <th className="py-2 px-4 text-left">Rank</th>
          <th className="py-2 px-4 text-left">User</th>
          <th className="py-2 px-4 text-left">XP</th>
          <th className="py-2 px-4 text-left">Streak</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, idx) => (
          <tr key={entry.username} className="border-t border-emerald-100">
            <td className="py-2 px-4 font-bold">{idx + 1}</td>
            <td className="py-2 px-4">{entry.username}</td>
            <td className="py-2 px-4">{entry.xp}</td>
            <td className="py-2 px-4">🔥 {entry.streak}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
