import React from "react";
import Navebar from "@/app/navebar/Navebar";
import Footer from "../footer/Footer";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode; // Define children as a prop of type ReactNode
  }
  
const Layout = ({ children }: LayoutProps) =>{
  const design = (
    <>  
     <div style={{ display: 'flex',     flexDirection:'column',   minHeight: '100vh' }}>
            <header>
                <Navebar/>
            </header>
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
    </div>
    </>

  );
  return design;
}
export default Layout;