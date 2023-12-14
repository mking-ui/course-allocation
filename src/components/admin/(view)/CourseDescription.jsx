import RemoveButton from "@/components/Remove";
import getAllCourses from "@/course-fetch/getAllCourse";
import Link from "next/link";
export default async function CourseDescription() {
  const level1s = await getAllCourses();
  return (
    <>
      <div className="container " id="courses">
        
          <Link
            className="btn border-0  back  shadow btn-sm mx-1"
            href="/dashboard"
          >
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>
          <div className="shadow-none mb-1 py-3 text-center ">
            <Link href={'/adminSrch'}>
            <input
              type="text"
              className="shadow border-0 p-2 rounded-2 col-lg-5 col-12 position-relative "
              placeholder="Search for your course"
            />
            </Link>
          </div>
      </div>
      <div className="container " id="courses">
        {level1s.map((first) => {
          return (
            <div className="row g-4" key={first.id}>
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
                className="col-lg-7 pt-1 con order-2 order-lg-1 pt-2 title-description"
                data-aos="fade-up"
              >
                <h2>{first.title}</h2> <hr  className="text-light mb-1"/>
                <p className="text-cate pl1 pt-3">{first.description}</p>
                <div className="d-flex flex-row gap-2 ">
                  <Link
                    href={`/details/${first._id}`}
                    className="btn btn-readmore shadow "
                  >
                    <i className="bi bi-chevron-right">Read More</i>
                  </Link>

                  <Link
                    href={""}
                    className="btn btn-readmore border border-2 border-secondary "
                  >
                    <i className="bi bi-pencil me-1 text-success"></i>Edit
                  </Link>
                  <RemoveButton id={first._id} />
                </div>
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
                    <span className="fw-bold">Name: </span> {first.name}
                  </p>
                  <p className="pl m-0">
                    <span className="fw-bold">Position: </span>
                    {first.position}
                  </p>
                  <p className="pl m-0">
                    <span className="fw-bold">Email: </span>
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
