"use client";

import { Doughnut } from "react-chartjs-2";
import { ensureChartJSRegistered } from "@/lib/chart";
import { useMemo } from "react";
import type { ChartData, ChartOptions } from "chart.js";

ensureChartJSRegistered();

export default function DonutChart() {
  const data: ChartData<"doughnut"> = useMemo(
    () => ({
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [
        {
          data: [56, 34, 10],
          backgroundColor: ["#0ea5e9", "#f59e0b", "#ef4444"],
          borderWidth: 0,
        },
      ],
    }),
    []
  );

  const options: ChartOptions<"doughnut"> = useMemo(
    () => ({
      cutout: "68%",
      plugins: { legend: { display: false } },
      responsive: true,
      maintainAspectRatio: false,
    }),
    []
  );

  return (
    <div className="h-48">
      <Doughnut data={data} options={options} />
    </div>
  );
}
