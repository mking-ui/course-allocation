
import getAllCourses from "@/course-fetch/getAllCourse";
import Link from "next/link";

const InstructorTable = async () => {
  
  const instruct = await getAllCourses();

  return (
    <div className=" container" id="table">
      <div className="row primary-color d-flex flex-row">
        <div className="col-12">
          <p className="display-6 mb-0 text-justify">
            <Link
              className="btn border-0  back  shadow btn-sm mx-1"
              href="/dashboard"
            >
              <i className="bi bi-arrow-left mx-1"> </i>
            </Link>
            <button type="button" class="btn btl btn-lg position-relative mt-2">
              Instructor
              <span class="position-absolute top-0 start-100 translate-middle p-2 btl border border-3 border-light rounded-circle">
                <span class="visually-hidden"></span>
              </span>
            </button>
          </p>
          <blockquote className="display-6 mt-3 mt-md-2 text-justify">
           Overview of instructor course allocation page.
          </blockquote>
        </div>
      </div>
      <div className="shadow-none mb-1 py-1">
        <Link href="">
          <input
            type="text"
            className="shadow border-0 p-2 rounded-2  col-12 col-lg-6"
            placeholder="search"
            readOnly
          />
        </Link>
      </div>
      <h3>Your Courses</h3>

      <div className="container con rounded-2 py-3">
        <form onSubmit="handleUpdate">
          <div className="tableheader overflow-x-auto ">
            <table class="table rounded-2 border-dark-subtle table-bordered table-striped  table-hover table-responsive">
              <thead className=" text-center ">
                <tr>
                  <th scope="col">Course_code</th>
                  <th className=" w-25 px-5">Course_title</th>
                  <th scope="col">Instructor_Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Specializes</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody className="text-center ">
                {instruct.map((e) => (
                  <tr key={e.id}>
                    <td>{e.code}</td>
                    <td>{e.title}</td>
                    <td>{e.name}</td>
                    <td>{e.position}</td>
                    <td>{e.specializes}</td>
                    <td>{e.phone}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
};
export default InstructorTable;
