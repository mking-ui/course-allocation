import AddData from "@/components/courses/(100)/AddData";
import AddData200 from "@/components/courses/(200)/AddData200";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="container " id="add">
        <div className="display-6 mb-2 text-justify">
          <Link
            className="btn border-0  back  shadow btn-sm mx-1"
            href="/dashboard"
          >
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>
          <button
            type="button"
            className="btn btl btn-lg w-100 position-relative mt-2"
          >
          <h3 className="animate__animated animate__heartBeat text-light  ">
            Welcome Back
          </h3>
           Add course
          
          </button>
        </div>

        <ul
          className="nav nav-pills mt-3  mb-3 justify-content-start justify-content-lg-end align-items-start animate__animated animate__fadeInDown "
          role="tablist"
        >
          <li className="nav-item mx-1">
            <Link className="nav-link active" data-bs-toggle="pill" href="#100">
              100 LEVEL
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" data-bs-toggle="pill" href="#200">
              200 LEVEL
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" data-bs-toggle="pill" href="#300">
              300 LEVEL
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" data-bs-toggle="pill" href="#400">
              400 LEVEL
            </Link>
          </li>
        </ul>

        <div className="tab-content">
          <div className="container p-0 tab-pane active" id="100">
            <div className="col-12">
              <AddData />
            </div>
          </div>

          <div className="container tab-pane fade" id="200">
            <AddData200 />
          </div>

          <div className="container tab-pane fade" id="300">
            <h1>300 level here!</h1>
          </div>

          <div className="container tab-pane fade" id="400">
            <h1>400 level here!</h1>
          </div>
        </div>
      </div>
    </>
  );
}
