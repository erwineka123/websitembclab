import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MBC Laboratory",
  description: "Official website of MBC Laboratory",
};

interface LayoutProps {
  children: ReactNode;
}

const Home: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`inter.className bg-gradient-to-b from-[#000000] to-[#0E2954] `}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Home;
