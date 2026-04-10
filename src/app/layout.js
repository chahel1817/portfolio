import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import GlobalAudio from "@/components/GlobalAudio";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Chahel Tanna | Full Stack Developer",
  description: "Portfolio of Chahel Tanna, focused on building high-performance and user-friendly web applications.",
  keywords: ["Portfolio", "Full Stack Developer", "Next.js", "React"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ fontFamily: "'Rajdhani', sans-serif", background: "#080810", color: "#d6deea" }}>
        <GlobalAudio />
        {children}
      </body>
    </html>
  );
}
