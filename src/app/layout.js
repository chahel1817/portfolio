import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Batman-themed developer portfolio — building high-performance web applications from the shadows.",
  keywords: ["Portfolio", "Full Stack Developer", "Next.js", "React"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ fontFamily: "'Rajdhani', sans-serif", background: "#080810", color: "#cbd5e1" }}>
        {children}
      </body>
    </html>
  );
}
