
import getSingleCourse from "@/course-fetch/level2/getSingleCourse";
import Link from "next/link";
export default async function ViewCourses({ params: { id } }) {
  const second = await getSingleCourse(id);
  console.log(second);
  return (
    <>
      <div className="container " >
        <div className="col-4 fixed-top my-3 p-3">
          <Link
            className="btn border-0  back  shadow btn-sm mx-3"
            href="/courses"
          >
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>
        </div>
      </div>

      <div className="container con shadow mt-5 p-4 justify-content-center align-items-center rounded-2" id="project">
       <div className="row">
          <h2 className="my-3">{second.code}</h2>
          <h1 className="my-3">{second.title}</h1>

          <p className="text-justify">{second.description}</p>
          <div className="col-12 ">
          <Link
                  href={`${second.image}`}
                  data-lightbox="instructor"
                  data-title=" instructor image"
                  className="glightbox mb-0"
                >
            <img src={second.image} className="vid-img img-fluid " /></Link>
          </div>
          </div>
      </div>
    </>
  );
}
