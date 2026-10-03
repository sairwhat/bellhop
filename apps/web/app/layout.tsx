import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bellhop — Your schedule, typed for you",
  description:
    "Photograph the grid your school printed and get an editable timetable in seconds. Focus blocks, tasks, and an AI tutor that reads your own notes.",
};

export const viewport: Viewport = {
  themeColor: "#06060a",
  colorScheme: "dark",
};

const themeScript = `(function(){try{if(localStorage.getItem("bellhop-theme")==="light"){document.documentElement.dataset.theme="light"}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="scene" aria-hidden />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
