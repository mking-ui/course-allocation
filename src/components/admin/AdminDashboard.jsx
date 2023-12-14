import Link from "next/link";
export default function AdminDashboard() {
  return (
    <>
      <div className="container px-4 py-1" id="admindashboard">
        <div className="row primary-color d-flex flex-row">
          <div className="col-12">
            <div className="display-6 mb-0 text-justify">
              <Link className="btn border-0  back  shadow btn-sm mx-1" href="/">
                <i className="bi bi-arrow-left mx-1"> </i>
              </Link>

              <button
                type="button"
                className="btn btl btn-lg position-relative mt-2"
              >
                Admin Panel
                <span className="position-absolute top-0 start-100 translate-middle p-2 btl border border-3 border-light rounded-circle">
                  <span className="visually-hidden"></span>
                </span>
              </button>
            </div>
          </div>

          <section id="services" className="services">
            <div
              className="section-title"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <h2>Welcome Admin</h2>
              <p className="lead">
                This is the admin panel where the admin can add, update and
                delete instructor or course description.
              </p>
            </div>

            <div className="row con py-4 text-center sec">
              <div className="col-md-6 col-lg-4  align-items-stretch mb-5 mb-lg-0">
                <Link href="/adminAdd" className="text-decoration-none">
                  <div className="icon-box">
                    <h4 className="title text-uppercase">Add Instructor</h4>
                    <div className="icon">
                      <i className="bi bi-database-fill-add"></i>
                    </div>
                    <p className="description">
                      Add all instruct with their course description{" "}
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-4  align-items-stretch mb-5 mb-lg-0">
                <Link href="/instructor-table" className="text-decoration-none">
                  <div className="icon-box">
                    <h4 className="title text-uppercase">Instructor's View</h4>
                    <div className="icon">
                      <i className="bi bi-amd"></i>
                    </div>
                    <p className="description">View all instructor table format</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-4  align-items-stretch mb-5 mb-lg-0">
                <Link href="/viewcourse" className="text-decoration-none">
                  <div className="icon-box">
                    <h4 className="title">Course Description</h4>
                    <div className="icon">
                      <i className="bi bi-body-text"></i>
                    </div>
                    <p className="description">View all Courses and edit</p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
