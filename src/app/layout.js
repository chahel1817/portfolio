import { Orbitron, Rajdhani } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GlobalAudio from "@/components/GlobalAudio";
import { ThemeProvider } from "@/context/ThemeContext";

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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GP67VETFXS"
        />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MT0GWSPXPL');
            `}
        </Script>
        <ThemeProvider>
          <GlobalAudio />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
