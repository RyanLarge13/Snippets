import Header from "../components/Header";
import Provider from "@/components/Provider";
import "./globals.css";

export const metadata = {
  title: "Snippets",
  description:
    "Upload, share and enjoy these awesome code snippets from people all around the world!!",
  charset: "utf-8",
  icons: {
    icon: "/favicon.svg",
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
      <body>
        <Provider session={null}>
          <div className="fixed top-20 rounded-full w-[200px] h-[250px] bg-purple-800 opacity-20 blur-2xl left-10 z-10"></div>
          <div className="fixed top-10 rounded-full w-[450px] h-[500px] bg-purple-800 opacity-20 blur-2xl left-40 z-10"></div>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
