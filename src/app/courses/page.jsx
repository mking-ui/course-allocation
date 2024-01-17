import FirstSemester100 from "@/components/courses/(100)/Fs100";
import FirstSemester200 from "@/components/courses/(200)/Fs200";
import NavB from "@/components/NavB";
import Link from "next/link";

export default function page() {
  return (
    <>
      <NavB />
     

      <div className="container" id="coursespage">
      
        <button
          type="button"
          class="btn btl btn-lg w-100 position-relative mt-2"
        >
          Courses Description <br />
          <div className="shadow-none mb-1 py-2">
            <Link href={"/searchCrs1"}>
              <input
                type="text"
                className="shadow border-0 p-2 rounded-2  position-relative col-12 col-md-4"
                placeholder="Search for your course"
              />
            </Link>
          </div>
        </button>

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
            <div className="col-12">
             {/** <FirstSemester100 /> */}
            </div>
          </div>

          <div className="container tab-pane fade" id="200">
            {/**<FirstSemester200 /> */}
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
