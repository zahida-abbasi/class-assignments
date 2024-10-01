import React from "react";
import "./footer.css";

const Footer = () =>{
  const design = (
    <> 
          <footer className="footer">
            <div className="footerContent">
              <p>&copy; {new Date().getFullYear()} Created by ZAHIDA. All rights reserved.</p>
            </div>
        </footer>
    </>

  );
  return design;
}
export default Footer;