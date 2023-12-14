import Link from "next/link";

export default function NavB() {
  return (
    <>
      <nav className="navbar navbar-light con navbar-expand-lg fixed-top ">
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center animate__animated animate__fadeInDown"
            href="/dashboard"
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
            className=" sidebar offcanvas offcanvas-start offset-1 mt-3 mb-3  "
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4">
              <ul className="navbar-nav justify-content-md-end justify-content-center flex-grow-1 pe-3">
                <li className="nav-item mx-2  py-md-3">
                  <a href="/dashboard" className="nav-link">
                   Name
                  </a>
                </li>
                <li className="nav-item mx-2  py-md-3">
                  <a href="/dashboard" className="nav-link ">
                    Email
                  </a>
                </li>
                <li className="nav-item mx-2  py-md-3">
                  <Link href="/dashboard" className="nav-link ">
                   Sign Out
                  </Link>
                </li>
               </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
