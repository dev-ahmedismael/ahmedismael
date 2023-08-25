import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ahmed Ismael | Frontend Web Developer</title>
        <meta name="description" content="Ahmed Ismael Portfolio" />
        <meta
          name="title"
          property="og:title"
          content="Ahmed Ismael | Front-end Web Developer"
        />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="url"
          property="og:url"
          content="https://ahmedismael.vercel.app"
        />
        <meta
          name="image"
          property="og:image"
          content="../public/images/logo.png"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
