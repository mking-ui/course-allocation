import Link from "next/link";
export default function Project() {
  return (
    <>
      <div className="container p-4 shadow" id="project">
        <div className="display-6 mb-1 text-justify">
          <Link
            className="btn border-0  back  shadow btn-sm mx-1"
            href="/about"
          >
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>
        </div>
        <h1 className=" mt- ms-1">What is a Project?</h1>
        <p className="mb-4">
          Project work is a collection of activities that offers students the
          opportunty to
        </p>
        <ul>
          <li>learn</li>
          <li>do independent research</li>
          <li>
            and conduct independent action bsed on their skills, interest, and
            personal experiences.
          </li>
        </ul>
        <p className="mb-4">
          An instructor or other guide observes and guides the project work as
          it progresses.
        </p>

        <p className="my-2">
          Here is a video on final year computer science projects ideas.
        </p>
        <div className="col-12 ">
          <img src="/imgs/sch.jpg" className="vid-img img-fluid" />
        </div>
      </div>
      <div className="container">
        <div className="row mt-5  gap-lg-0">
        <h1 className=" mt-2 ms-1">List of some final year project</h1>
          <div className="col-lg-4 col-12  my-lg-2 " id="topic">
            <h1>Lorem ipsum </h1>
            <small>Software/Technology</small>
            <div className="d-flex flex-row">
              <li className="nav-item">Java</li>
              <li className="nav-item">Python</li>
            </div>

            <div>
              <details className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                ullam.
              </details>
            </div>
          </div>
          <div className="col-lg-4 col-12  my-lg-2 " id="topic">
            <h1>Lorem ipsum </h1>
            <small>Software/Technology</small>
            <div className="d-flex flex-row">
              <li className="nav-item">Java</li>
              <li className="nav-item">Python</li>
            </div>

            <div>
              <details className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                ullam.
              </details>
            </div>
          </div>
          <div className="col-lg-4 col-12  my-lg-2 " id="topic">
            <h1>Lorem ipsum </h1>
            <small>Software/Technology</small>
            <div className="d-flex flex-row">
              <li className="nav-item">Java</li>
              <li className="nav-item">Python</li>
            </div>

            <div>
              <details className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                ullam.
              </details>
            </div>
          </div>
          <div className="col-lg-4 col-12  my-lg-2 " id="topic">
            <h1>Lorem ipsum </h1>
            <small>Software/Technology</small>
            <div className="d-flex flex-row">
              <li className="nav-item">Java</li>
              <li className="nav-item">Python</li>
            </div>

            <div>
              <details className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                ullam.
              </details>
            </div>
          </div>
          <div className="col-lg-4 col-12  my-lg-2 " id="topic">
            <h1>Lorem ipsum </h1>
            <small>Software/Technology</small>
            <div className="d-flex flex-row">
              <li className="nav-item">Java</li>
              <li className="nav-item">Python</li>
            </div>

            <div>
              <details>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                ullam.
              </details>
            </div>
          </div>
          <div className="col-lg-4 col-12 my-lg-2 " id="topic">
            <h1>Lorem ipsum </h1>
            <small>Software/Technology</small>
            <div className="d-flex flex-row">
              <li className="nav-item">Java</li>
              <li className="nav-item">Python</li>
            </div>

            <div>
              <details >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                ullam.
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
