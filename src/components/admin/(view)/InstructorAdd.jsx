"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InstructorAdd() {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [specializes, setSpecializes] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code || !title || !name || !position || !specializes || !phone) {
      alert("all fields are required");
      return;
    }
    const response = await fetch("api/instructor1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        title,
        name,
        position,
        specializes,
        phone,
      }),
    });
    if (response.status == 200) {
      router.refresh();
      setCode("");
      setTitle("");
      setName("");
      setPosition("");
      setSpecializes("");
      setPhone("")
      
    }
  };
  return (
    <>
      <div className=" container mt-5 mb-4 text-justify d-flex flex-row justify-content-start align-items-center">
        <Link
          className="btn border-0  back  shadow btn-sm mx-1"
          href="/dashboard"
        >
          <i className="bi bi-arrow-left mx-1"> </i>
        </Link>
      </div>
      <section className="d-flex  mt-5 align-items-center justify-content-center text-light">
        <div className="container ">
          <div className="row  justify-content-center align-items-center">
            <div className="col-lg-4 col-12 text-center">
              <h3 className="animate__animated animate__heartBeat animate__infinite ">
                Welcome Back
              </h3>
              <p>
                Allocate course to the instruction <br /> as well as with their
                contact !
              </p>
            </div>
            <div className="col-lg-8 con p-4 rounded-2 col-12">
              <form className="row g-2" onSubmit={handleSubmit}>
                <div className="col-md-6 ">
                  <label htmlFor="code" className="form-label">
                    Course Code
                  </label>

                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="code"
                    onChange={(e) => setCode(e.target.value)}
                value={code}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="title" className="form-label">
                    Course Title & (Credit Unit)
                  </label>
                  <input
                    type="title"
                    className="form-control shadow-sm"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                value={title}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Lecturer Name
                  </label>
                  <input
                    type="text"
                    className="form-control  shadow-sm"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                value={name}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Position
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="name"
                    onChange={(e) => setPosition(e.target.value)}
                value={position}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="department" className="form-label">
                    Specialised/Field
                  </label>
                  <input
                    type="text"
                    className="form-control  shadow-sm"
                    id="department"
                    onChange={(e) => setSpecializes(e.target.value)}
                value={specializes}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone No.
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                value={phone}
                  />
                </div>

                <button type="submit" className="btn btn-add text-light my-2">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
