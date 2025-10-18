"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
// Keep options simple to avoid type mismatch across chart types

let isRegistered = false;

export function ensureChartJSRegistered() {
  if (isRegistered) return;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    Filler
  );
  isRegistered = true;
}

// Simple animation settings (used implicitly by Chart.js defaults)
export const simpleAnimation = {
  duration: 600,
  easing: "easeInOutQuart" as const,
};
