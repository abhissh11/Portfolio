import { Inter, Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Abhishek Kumar",
  description: "Portfolio of Abhishek Kumar, GitHub @dev-abhishekkr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={space_grotesk.className}>
      <body className={space_grotesk.className}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
