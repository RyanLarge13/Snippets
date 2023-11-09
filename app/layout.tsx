export const runtime = "edge";

import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import "./globals.css";

export const metadata = {
  title: "Snipz - share your best snippests as a software engineer",
  description:
    "Upload, share and enjoy awesome code snippets from people all around the world!!",
  charset: "utf-8",
  icons: {
    icon: "./favicon.ico",
  },
  viewport:
    "width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{baseTheme: dark}}>
        <body>
          <div className="fixed top-20 rounded-full w-[200px] h-[250px] bg-purple-800 opacity-20 blur-2xl left-10 z-10 pointer-events-none" aria-hidden="true" ></div>
          <div className="fixed top-10 rounded-full w-[450px] h-[500px] bg-purple-800 opacity-20 blur-2xl left-40 z-10 pointer-events-none" aria-hidden="true"></div>
          <Header />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
