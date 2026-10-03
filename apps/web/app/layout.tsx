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

// TEMPORARY bisect harness. Append one of these to the URL to disable one layer
// at a time, which is far faster than guessing which one is misbehaving:
//   #nograin  #noscene  #novignette  #noblur  #nofixed
const debugScript = `(function(){var h=location.hash.replace("#","");if(h){document.documentElement.dataset.dbg=h}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: debugScript }} />
      </head>
      <body>
        <div className="scene" aria-hidden />
        <div className="grain" aria-hidden />
        <div className="vignette" aria-hidden />
        {children}
      </body>
    </html>
  );
}
