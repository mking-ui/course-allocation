import Link from "next/link";
import Image from "next/image";
export default function NavLanding() {
  return (
    <nav className="navbar navbar-expand-md fixed-top landingNav ">
      <div className="container ">
        <Link
          className="navbar-brand d-flex align-items-center animate__animated animate__fadeInDown"
          href="/"
        >
          Course <span className="text-primary ms-2"> A </span> llocation
        </Link>
        <button
          className="navbar-toggler shadow-none border-0 text-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="bi bi-list h3"></span>
        </button>
        <div
          className=" sidebar offcanvas offcanvas-start  mt-3 mb-3 "
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header  ">
            <h5
              className="offcanvas-title  d-flex justify-content-start align-items-center text-uppercase"
              id="offcanvasNavbarLabel"
            >
              Course <span className="text-primary ms-2"> A </span> llocation
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white text-reset justify-self-end"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
            <hr />
          </div>
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-3 justify-content-md-end">
           
            <div className="d-flex flex-column flex-md-row  animate__animated animate__fadeInDown align-items-center justify-content-end ">
              <Link href="/login" className=" btn btn-login me-2 text-dark me-3 ">
                Login
              </Link>
              <Link
                href="/login"
                className="btn sign text-center animate__animated animate__fadeInDown btn-signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
