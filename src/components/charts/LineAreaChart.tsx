"use client";

import { Line } from "react-chartjs-2";
import { ensureChartJSRegistered } from "@/lib/chart";
import { useMemo } from "react";
import type { ChartData, ChartOptions, ScriptableContext } from "chart.js";

ensureChartJSRegistered();

export default function LineAreaChart() {
  const data: ChartData<"line"> = useMemo(
    () => ({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sessions",
          data: [120, 190, 300, 250, 320, 400, 380],
          borderColor: "#3b82f6",
          backgroundColor: (ctx: ScriptableContext<"line">) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(0, 0, 0, 180);
            gradient.addColorStop(0, "rgba(59,130,246,0.35)");
            gradient.addColorStop(1, "rgba(59,130,246,0.02)");
            return gradient;
          },
          tension: 0.35,
          fill: "origin",
          pointRadius: 0,
        },
      ],
    }),
    []
  );

  const options: ChartOptions<"line"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: "rgba(0,0,0,0.06)" }, ticks: { stepSize: 100 } },
      },
    }),
    []
  );

  return (
    <div className="h-48">
      <Line data={data} options={options} />
    </div>
  );
}
