import getSingleCourse from "@/course-fetch/level1/getSingleCourse";
import Link from "next/link";
export default async function ViewCourses({ params: { id } }) {
  const first = await getSingleCourse(id);
  console.log(first);
  return (
    <>
      <div className="container ">
        <div className="col-4 fixed-top my-3 p-3">
          <Link
            className="btn border-0  back  shadow btn-sm mx-3"
            href="/courses"
          >
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>
        </div>
      </div>

      <div className="container con shadow mt-5 p-4 justify-content-center align-items-center rounded-2"  id="project">
        <section>
          <h2 className="my-3">{first.code}</h2>
          <h1 className="my-3">{first.title}</h1>

          <p className="text-justify">{first.description}</p>
          <div className="col-12 ">
          <Link
                  href={`${first.image}`}
                  data-lightbox="instructor"
                  data-title=" instructor image"
                  className="glightbox mb-0"
                >
            <img src={first.image} className="vid-img img-fluid" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
