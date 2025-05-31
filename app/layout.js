

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "sonner";
import "@/public/css/style.css"; 
import "@/public/css/bootstrap.min.css"; 

export const metadata = {
  title: "Electrical Jone",
  description: "Professional electrical services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <header>
            <Navbar />
          </header>
          <main className="main-container">{children}</main>
          <footer>
            <Footer />
          </footer>
          <Toaster richColors position="top-center" />
        </div>
      </body>
    </html>
  );
}

