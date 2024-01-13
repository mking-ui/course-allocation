import Link from "next/link";

export default function NavB() {
  return (
    <>
      <nav className="navbar navbar-light con navbar-expand-lg fixed-top ">
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center animate__animated animate__fadeInDown"
            href="/"
          >
            Course <span className="text-primary ms-2"> A </span> llocation
          </Link>
          <button
            className="navbar-toggler  shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="bi bi-list h3"></span>
          </button>
          <div
            className=" sidebar offcanvas offcanvas-start  mt-3 mb-3  "
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header  ">
              <h5
                className="offcanvas-title text-uppercase  d-flex justify-content-start align-items-center"
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
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4">
              <ul className="navbar-nav justify-content-md-end justify-content-center flex-grow-1 pe-3">
                <li className="nav-item mx-2  py-md-3">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-2  py-md-3">
                  <a href="/courses" className="nav-link ">
                    Description
                  </a>
                </li>
                <li className="nav-item mx-2 py-md-3 ">
                  <a href="/instructor" className="nav-link ">
                   Courses
                  </a>
                </li>
                <li className="nav-item mx-2   py-md-3">
                  <a href="/about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item mx-2 py-md-3 ">
                  <a href="/project" className="nav-link">
                    Project
                  </a>
                </li>
              </ul>
              <div className="d-flex flex-column flex-md-row d-lg-none">
                <Link href="" className="btn  me-2 text-light pt-4 my-0">
                  Login
                </Link>
                <Link
                  href=""
                  className="btn btn-code text-center animate__animated animate__fadeInUp text-light "
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
