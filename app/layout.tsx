import { url } from "inspector";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Snippets",
  description:
    "Upload, share and enjoy these awesome code snippets from people all around the world!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-20 rounded-full w-[200px] h-[250px] bg-purple-800 opacity-20 blur-2xl left-10 z-10"></div>
        <div className="fixed top-10 rounded-full w-[450px] h-[500px] bg-purple-800 opacity-20 blur-2xl left-40 z-10"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
