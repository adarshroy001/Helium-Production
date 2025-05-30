import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Nav";
import Footer from "@/components/Layout/Footer";
// import Footertwo from "@/components/Layout/Footer2";

export const metadata: Metadata = {
  title: "Helium",
  description: "Next-gen air conditioning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div>
          <Navbar />
          {children}
          <Footer />
          {/* <Footertwo /> */}
        </div>
      </body>
    </html>
  );
}

