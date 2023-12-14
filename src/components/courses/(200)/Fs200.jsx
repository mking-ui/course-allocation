import getAllCourses from "@/course-fetch/getAllCourse";
import Link from "next/link";

export default async function FirstSemester200() {
 const level1s = await getAllCourses();
  return (
    <>
      <div className="container" id="courses">
        {level1s.map((first) => {
          return (
            <div className="row g-4">
              <div className="col-lg-2">
                <Link
                  href={`/details/${first._id}`}
                  className="code p-2 mb-0"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  {first.code}
                </Link>
              </div>

              <div
                className="col-lg-7 pt-1  order-2 order-lg-1 shadow"
                data-aos="fade-up"
              >
                <h2>{first.title}</h2>
                <p className="text-cate pl1 ">{first.description}</p>
                <Link
                  href={`/details/${first._id}`}
                  className="btn btn-readmore shadow "
                >
                  <i className="bi bi-chevron-right">Read More</i>
                </Link>
              </div>

              <div
                className="col-lg-3 order-1 order-lg-1  "
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <h1-6>
                  <span class="badge btn-code text-light p-2 mt-0 mb-2">
                    Instructor
                  </span>
                </h1-6>
                <img src={first.image} className="lec-img " />

                <div className="">
                  <p className="pl m-0">
                    <span className="fw-bold">Name:</span> {first.name}
                  </p>
                  <p className="pl m-0">
                    <span className="fw-bold">Department:</span>
                    {first.department}
                  </p>
                  <p className="pl m-0">
                    <span className="fw-bold">Email:</span>
                    {first.email}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
);
}
