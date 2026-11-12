import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "var(--page)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        hairline: "var(--hairline)",
        accent: "var(--accent)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(56px, 8vw, 112px)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-l": ["clamp(40px, 4.5vw, 64px)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        "display-m": ["clamp(26px, 2.5vw, 36px)", { lineHeight: "1.2" }],
        "display-s": ["clamp(22px, 2vw, 28px)", { lineHeight: "1.2" }],
        "body-l": ["20px", { lineHeight: "1.5" }],
        "body-m": ["16px", { lineHeight: "1.55" }],
        "body-s": ["14px", { lineHeight: "1.5" }],
      },
    },
  },
} satisfies Config;
