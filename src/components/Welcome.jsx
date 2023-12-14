import Image from "next/image";
import Link from "next/link";
export default function Welcome() {
  return (
    <>
      <header className="parallax-header">
        <div className="container ">
          <div
            className="header-content"
            data-aos="zoom-out"
            data-aos-delay="400"
          >
            <Link href="/">
              <Image
                src="/kasulogo.png"
                alt=""
                width="200"
                height="150"
                className=" d-md-none d-block mx-auto "
              />
            </Link>
          </div>
        </div>
      </header>
      <div className="container p-4">
        <div className="content row  text-lg-center text-md-start">
          <div
            className="col-12 left p-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="primary-color ">
              Courses Allocation Web Application <hr className="mt-0 mb-2" />
            </h1>
            <h4>
              for <span className="instructor">Instructor</span> and courses
              description for
              <span className="student"> student.</span>
            </h4>
            <div className="d-flex justify-content-center">
              <Link href="/courses" className="btn btn-code me-2">
                Get Started
              </Link>
              <Link
                href="/about"
                className=" learn text-center animate__animated animate__fadeInUp text-dark "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
