"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddData() {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [specializes, setSpecializes] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("")
  
  const router = useRouter();

  const CLOUD_NAME = "djkeyh3y0";
  const UPLOAD_PRESET = "csc_course";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !code ||
      !title ||
      !description ||
      !name ||
      !position ||
      !specializes ||
      !phone ||
      !email
    ) {
      alert("all fields are required");
      return;
    }
    try {
      const resUserExists = await fetch("api/exist1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
  
      const { user } = await resUserExists.json();
  
      if (user) {
        setError("course already exists.");
        return;
      }
      
   
    const image = await uploadImage();
    const response = await fetch("api/level1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        title,
        description,
        name,
        position,
        specializes,
        phone,
        email,
        photo,
        image,
      }),
    });
    if (response.status == 200) {
      router.refresh();
      setError("");
      setCode("");
      setTitle("");
      setDescription("");
      setName("");
      setPosition("");
      setSpecializes("");
      setPhone("")
      setEmail("");
      setPhoto("");
    }
  } catch (error) {
      
    console.log("Error during registration: ", error);
  }
  };
  const uploadImage = async () => {
    if (!photo) return;
e.preventDefault();
    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const image = data["secure_url"];

      return image;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-light p-3">
      <div className="row  justify-content-center align-items-center">
       
        <div className="col-md-8 shadow con col-12 rounded-2 py-2 mb-3">
          <form className="row g-2  " onSubmit={handleSubmit}>
          {error && <p className=" text-center text-danger">{error}</p>}
                  <hr className="mb-1" />
            <div className="col-md-6 ">
              <label htmlFor="code" className="form-label text-light">
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
              <label htmlFor="title" className="form-label text-light">
                Course Title & (Credit Unit)
              </label>
              <input
                type="title"
                className="form-control  shadow-sm"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

           

            <div className="col-md-4">
              <label htmlFor="name" className="form-label text-light">
                Instructor Name
              </label>
              <input
                type="text"
                className="form-control  shadow-sm"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="position" className="form-label text-light">
               Position
              </label>
              <input
                type="text"
                className="form-control  shadow-sm"
                id="position"
                onChange={(e) => setPosition(e.target.value)}
                value={position}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="specializes" className="form-label text-light">
              Specializes
              </label>
              <input
                type="text"
                className="form-control  shadow-sm"
                id="specializes"
                onChange={(e) => setSpecializes(e.target.value)}
                value={specializes}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="Email" className="form-label text-light">
                Email Address:
              </label>
              <input
                type="email"
                className="form-control  shadow-sm"
                id="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="phone" className="form-label text-light">
               Phone No:
              </label>
              <input
                type="phone"
                className="form-control  shadow-sm"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            
            <div className="col-md-4">
              <label htmlFor="image" className="form-label text-light">
                Upload Image
              </label>
              <input
                onChange={(e) => setPhoto(e.target.files[0])}
                type="file"
                className="form-control shadow-sm"
                id="image"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="description" className="form-label text-light">
                Description
              </label>
              <textarea
                className="form-control  shadow-sm"
                id="description"
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-add text-light my-3 ">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
