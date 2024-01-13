import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer id="footer" className="text-center text-muted mt-3 con py-2 fixed-bottom">
     <Link href="" className=" me-2 scroll-back d-flex justify-content-end position-relative align-items-lg-stretch">
            <i className=" bi bi-arrow-up p-1"></i>
          </Link>
      <div className="container ">
    
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span> Course allocation</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits ">
          Designed by <Link href="/" className="text-decoration-underline fst-italic"> Enoch Micah</Link>
         
        </div>
        
      </div>
    </footer>
  );
}
