import Link from "next/link";
export default function About() {
  return (
    <>
      <div className="container heading-about">
        <div className="display-6 mb-1 text-justify">
          <Link className="btn border-0  back  shadow btn-sm mx-1" href="/">
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>
        </div>

        <h1 className="mt-3 ms-1">About us</h1>
      </div>
      <div
        className="container p-4 shadow  justify-content-center  align-items-center"
        id="About"
      >
        <div className=" row">
          <p className="text-justify font-roboto">
            The course allocation system for lecturer is being developed to
            provide ease handling on course given for lecturers.All lecturers
            are having their preferable courses where their expertise field play
            the most important role on that issue. Due to that doing on manual
            course allocation they could not get the preferred course, due to
            that a system has to be develop accordingly. The system also
            minimizes the usage of paperwork and user friendly for the
            administrators to log in and edit if any changes required for the
            course allocation. T
          </p>
        </div>

        <section>
          <h1 className="my-3">Problem Statement</h1>
          <p className="text-justify">
            The current allocation is being done manually which cause inaccurate
            on the number of courses given for the lecturer. Other than that,
            lecturers could not get the preferred course according to their
            expertise. Lastly, the courses are difficult to manage according to
            the changes.
          </p>
          <h1 className="my-3">Objective</h1>

          <p className="text-justify">
            To handle the course allocation for lecturers on their preferred
            course according to their expertise. Moreover, provide the access
            for the lecturers to view on the courses assigned. Lastly, to create
            a system for the administrators to access or log in and make changes
            on the course.
          </p>
          <h1 className="my-3">Significance of Project</h1>
          <p className="text-justify">
            The system is developed to ease the administration office work for
            the course allocation on the semester. This system is also giving
            priority for the lecturers on the expertise field courses to be
            lectured for the students who registered the courses on the
            semester. The system also helps on the higher position lecturers to
            receive on minimum number of courses which can lower their wok
            burden. It also helps on the research lecturers to by giving low
            amount of courses assign according to the profile created on the
            system. It authorizes the administration only to make any changes
            manually for the allocation part by adding, dropping or change the
            lecturer for the courses, if any students or management requested to
            add or drop the courses. Moreover, the system will be online basis
            where the lecturers and administrator can access the system anytime
            and anywhere.
          </p>
        </section>
      </div>
    </>
  );
}
