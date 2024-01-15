import Link from "next/link";
export default function AdminDashboard() {
  return (
    <>
      <div className="container px-4 py-1" id="admindashboard">
        <div className="row primary-color d-flex flex-row">
          <div className="col-12">
            <div className="display-6 mb-0 text-justify">
              <button
                type="button"
                className="btn btl btn-lg w-100 position-relative mt-2"
              >
                <div
                  className="section-title"
                  data-aos="fade-in"
                  data-aos-delay="100"
                >
                  <h2 className="text-light">Welcome Admin</h2>
                  <p className="lead">
                    This is where you can add, update and delete instructor or
                    course description.
                  </p>
                </div>
              </button>
            </div>
          </div>

          <section id="services" className="services">
            <div className="row con py-4 text-center sec">
              <div className="col-md-6 col-lg-4  align-items-stretch mb-5 mb-lg-0">
                <Link href="/adminAdd" className="text-decoration-none">
                  <div className="icon-box card h-100 border-0">
                    <div className="icon">
                      <i className="bi bi-database-fill-add"></i>
                    </div>
                    <h4 className="title text-uppercase">Add course</h4>

                    <p className="description">
                      Add all instruct with their course description
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-4  align-items-stretch mb-5 mb-lg-0">
              <Link href="/instructor-table" className=" text-decoration-none">
                <div className="icon-box card h-100 border-0">
                  <div className="icon">
                    <i className="bi bi-search"></i>
                  </div>
                  <h4 className="title text-uppercase">Courses table View</h4>

                  <p className="description">
                    View all instructor table format
                  </p>
                </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-4  align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box card h-100">
                  <h4 className="title">Course Description</h4>
                  <div className="row gy-2">
                    <div className="col-6">
                      <Link
                        href="/viewcourse"
                        className="btn btn-outline-dark border-dark rounded-2 w-75 border-0 "
                      >
                        100
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        href="/viewcourse2"
                        className="btn btn-outline-dark rounded-2 w-75 border-0 "
                      >
                        200
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        href=""
                        className="btn btn-outline-dark rounded-2 w-75 border-0"
                      >
                        300
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        href=""
                        className="btn btn-outline-dark rounded-2 w-75 border-0"
                      >
                        400
                      </Link>
                    </div>
                  </div>

                  <p className="description">View all Courses and edit</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
