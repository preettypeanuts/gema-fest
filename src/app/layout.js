import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";

const jak = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

const heading = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Gema Fest 2026",
  description: "18 Februari - 18 Maret 2026 | Lucky Lex Mall, Cakung, Jakarta Timur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jak.className} ${heading.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
