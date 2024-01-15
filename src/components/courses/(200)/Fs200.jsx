
import getAllCourses from "@/course-fetch/level2/getAllCourse";
import Link from "next/link";

export default async function FirstSemester200() {
 const level2s = await getAllCourses();
  return (
    <>
      <div className="container" id="courses">
        {level2s.map((second) => {
          return (
            <div className="row g-4" key={second._id}>
              <div className="col-lg-2">
                <Link
                  href={`/details2/${second._id}`}
                  className="code p-2 mb-0"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  {second.code}
                </Link>
              </div>

              <div
                className="col-lg-7 pt-1  order-2 order-lg-1 shadow"
                data-aos="fade-up"
              >
                <h2>{second.title}</h2>
                <p className="text-cate pl1 pt-3 text-justify ">{second.description}</p>
                <Link
                  href={`/details2/${second._id}`}
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
                <img src={second.image} className="lec-img " />

                <div className="">
                  <p className="pl m-0">
                    <span className="fw-bold">Name:</span> {second.name}
                  </p>
                  <p className="pl m-0">
                    <span className="fw-bold">Position:</span>
                    {second.position}
                  </p>
                  <p className="pl m-0">
                    <span className="fw-bold">Email:</span>
                    {second.email}
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
