import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Spicederiv.com",
  description: "Spicederv.com offers a straightforward platform and ultimate trading tools for engaging in financial markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://ext.same-assets.com/4239504319/2667292365.png" />
      </head>
      <body className={ibmPlexSans.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "#4e1522",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
