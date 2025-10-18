"use client";

import { Bar } from "react-chartjs-2";
import { ensureChartJSRegistered } from "@/lib/chart";
import { useMemo } from "react";
import type { ChartData, ChartOptions } from "chart.js";

ensureChartJSRegistered();

export default function BarChart() {
  const data: ChartData<"bar"> = useMemo(
    () => ({
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Revenue",
          data: [12, 19, 13, 17],
          backgroundColor: "#22c55e",
          borderRadius: 6,
          barPercentage: 0.6,
        },
        {
          label: "Costs",
          data: [8, 11, 9, 12],
          backgroundColor: "#a78bfa",
          borderRadius: 6,
          barPercentage: 0.6,
        },
      ],
    }),
    []
  );

  const options: ChartOptions<"bar"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: "rgba(0,0,0,0.06)" } },
      },
    }),
    []
  );

  return (
    <div className="h-48">
      <Bar data={data} options={options} />
    </div>
  );
}
