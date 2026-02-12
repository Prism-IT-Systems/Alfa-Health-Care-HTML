/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"]
      },
      colors: {
        deepBrown: "var(--Deep-Brown)",
        softIvory: "var(--Soft-Ivory)",
        warmTaupe: "var(--Warm-Taupe)",
        goldenBrown: "var(--Golden-Brown)",
        amberGoldGradient: "var(--Amber-Gold-Gradient)", // for bg-amberGoldGradient
        pureWhite: "var(--pure-white)",
        offWhite: "var(--Off-White)",
        softAmber: "var(--Soft-Amber)",
        darkMustard: "var(--Dark-Mustard)",
        SunlitGold: "var(--Sunlit-Gold)",
        WarmMarigold: "var(--Warm-Marigold)"
      },
      boxShadow: {
        shadow_1 : "var(--shadow1)"
      }
    },
  },
  plugins: [],
}
