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
        WarmMarigold: "var(--Warm-Marigold)",
        neutralGray: "#E8E8E8",
        neutralGrayHover: "#DDDDDD"
      },
      boxShadow: {
        shadow_1: "var(--shadow1)",
        productCard: "0px 2px 12px -2px rgba(66, 51, 36, 0.06)",
        productCardHover: "0px 2px 24px -2px rgba(66, 51, 36, 0.25)"
      }
    },
  },
  plugins: [],
}
