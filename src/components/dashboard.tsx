"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import LineAreaChart from "@/components/charts/LineAreaChart";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/DonutChart";
import { Search } from "lucide-react";

function StatCard({ title, value, delta, tone }: { title: string; value: string; delta: string; tone?: "up" | "down" }) {
  const isUp = tone !== "down";
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-xl border border-black/[0.06] dark:border-white/[0.1] p-4 bg-white/70 dark:bg-white/[0.04] backdrop-blur shadow-sm"
    >
      <div className="text-sm text-black/60 dark:text-white/60">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className={`mt-1 text-xs ${isUp ? "text-emerald-600" : "text-rose-600"}`}>{delta}</div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-black/70 dark:text-white/70">{title}</h3>
      </div>
      <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.1] p-4 bg-white/70 dark:bg-white/[0.04] backdrop-blur">
        {children}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Micro Interactions Dashboard</h1>
            <p className="text-sm text-black/60 dark:text-white/60">Design-engineered interface with animated feedback and smooth affordances.</p>
          </div>
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.01 }} className="hidden md:flex items-center gap-2 px-3 py-2 rounded-md border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur">
              <Search size={16} className="text-black/50 dark:text-white/60" />
              <input placeholder="Search" className="bg-transparent outline-none text-sm placeholder:text-black/40 dark:placeholder:text-white/40" />
            </motion.div>
            <ThemeToggle />
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Active Users" value="12,480" delta="▲ 4.2% vs last week" tone="up" />
          <StatCard title="Conversion" value="3.8%" delta="▲ 0.4pp" tone="up" />
          <StatCard title="Bounce Rate" value="28%" delta="▼ 1.2pp" tone="down" />
          <StatCard title="NPS" value="62" delta="▲ 3" tone="up" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Section title="Weekly Sessions">
              <LineAreaChart />
            </Section>
          </div>
          <div>
            <Section title="Traffic Sources">
              <DonutChart />
            </Section>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Section title="Quarterly Performance">
            <BarChart />
          </Section>
          <Section title="Interactions">
            <div className="flex flex-wrap gap-3">
              <motion.button whileTap={{ scale: 0.96 }} className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm">
                Primary Action
              </motion.button>
              <motion.button whileTap={{ scale: 0.96 }} className="px-4 py-2 rounded-lg border border-black/10 dark:border-white/15 text-sm">
                Secondary
              </motion.button>
              <motion.div whileHover={{ scale: 1.02 }} className="px-4 py-2 rounded-lg border border-dashed border-black/10 dark:border-white/15 text-sm text-black/60 dark:text-white/60">
                Hover me
              </motion.div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
