import FirstSemester100 from "@/components/courses/(100)/Fs100";
import FirstSemester200 from "@/components/courses/(200)/Fs200";
import NavB from "@/components/NavB";
import Link from "next/link";

export default function page() {
  return (
    <>
      <NavB />
      <div className="container" id="coursespage">
        <div className="display-6 mb-2 text-justify">
          <Link className="btn border-0  back  shadow btn-sm mx-1" href="/">
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>
          <button type="button" class="btn btl btn-lg position-relative mt-2">
            Courses Description
            <span class="position-absolute top-0 start-100 translate-middle p-2 btl border border-3 border-light rounded-circle">
              <span class="visually-hidden"></span>
            </span>
          </button>
        </div>

        <div className="shadow-none mb-1 py-2">
          <Link href={'/searchCrs'}>
          <input
            type="text"
            className="shadow border-0 p-2 rounded-2  position-relative col-12 col-md-4"
            placeholder="Search for your course"
          />
          </Link>
        </div>

        <ul
          className="nav nav-pills mt-2 justify-content-start justify-content-lg-end align-items-start animate__animated animate__fadeInDown "
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
            <div className="col-12">{/*<FirstSemester100 />*/}</div>
          </div>

          <div className="container tab-pane fade" id="200">
         {/*<FirstSemester100 />*/}
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
