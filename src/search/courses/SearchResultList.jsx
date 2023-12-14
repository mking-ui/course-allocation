import React from "react";
import Link from "next/link";

export default function SearchResultList({ results }) {
  return (
    <div className="container " id="courses">
      {results.map((first) => {
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
              <h2>{first.title}</h2> <hr className="text-light mb-1" />
              <p className="text-cate pl1 pt-3">{first.description}</p>
              
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
  );
}
