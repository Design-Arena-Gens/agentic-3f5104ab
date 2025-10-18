"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -1 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/15 px-3 py-2 text-sm bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 shadow-sm backdrop-blur transition-colors"
    >
      <motion.span
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -90, opacity: 0, y: 4 }}
        animate={{ rotate: 0, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center"
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </motion.button>
  );
}
