
import { Cabin } from "next/font/google";
import "./css/globals.scss";

const cabin = Cabin({ subsets: ["latin"] });

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "chasepoulton.com",
  description: "Portfolio website for Chase Poulton",
  icons: {
    icon: '/CP.png', // This will be used as favicon
    apple: '/CP.png',  // For Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <main className="min-h-screen relative mx-5 md:mx-auto px-1 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}