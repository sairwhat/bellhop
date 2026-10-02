import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bellhop — Your schedule, typed for you",
  description:
    "Snap a photo of the schedule your school printed and get an editable timetable in seconds. Pomodoro, tasks, and an AI tutor that reads your own notes.",
};

// themeColor belongs to the viewport export, not metadata. Without it mobile
// browsers paint their own chrome white and flash on load.
export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  colorScheme: "dark",
};

// Runs before paint so the stored theme is already applied. Without this the
// page renders dark first and then snaps to light, which reads as a glitch.
const themeScript = `(function(){try{var t=localStorage.getItem("bellhop-theme");if(t==="light"){document.documentElement.dataset.theme="light"}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">
        {children}
      </body>
    </html>
  );
}