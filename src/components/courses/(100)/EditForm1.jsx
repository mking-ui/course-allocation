"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditForm1({
  id,
  code,
  title,
  description,
  name,
  position,
  specializes,
  email,
  phone,
  image,
}) {
  const [newCode, setNewCode] = useState(code);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newName, setNewName] = useState(name);
  const [newPosition, setNewPosition] = useState(position);
  const [newSpecializes, setNewSpecializes] = useState(specializes);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newPhoto, setNewPhoto] = useState(image);

  const router = useRouter();

  const CLOUD_NAME = "djkeyh3y0";
  const UPLOAD_PRESET = "csc_course";

  async function handleUpdate(e) {
    e.preventDefault();

    const newImage = await udateImage();

    const response = await fetch(`/api/level1/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newCode,
        newTitle,
        newDescription,
        newName,
        newPosition,
        newSpecializes,
        newEmail,
        newPhone,
        newImage,
      }),
    });
    if (response.status == 200) {
      router.push("/viewcourse");
      router.refresh();
    }
    //console.log(newUser);
  }

  const udateImage = async () => {
    if (!newPhoto) return;

    const formData = new FormData();

    formData.append("file", newPhoto);
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

      const newImage = data["secure_url"];

      return newImage;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container  c-container shadow  text-light p-3">
      <div className="row  justify-content-center align-items-center">
        <div className="col-lg-4 col-12 text-center">
          <h3 className="animate__animated animate__heartBeat animate__infinite ">
            Welcome Back
          </h3>
          <p>Update</p>
        </div>
        <div className="col-md-8 con col-12 rounded-2 py-2 mb-3">
          <form className="row g-2 " onSubmit={handleUpdate}>
            <div className="col-md-6 ">
              <label htmlFor="code" className="form-label">
                Course Code
              </label>

              <input
                type="text"
                className="form-control shadow-sm"
                id="code"
                onChange={(e) => setNewCode(e.target.value)}
                value={newCode}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Course Title & (Credit Unit)
              </label>
              <input
                type="title"
                className="form-control  shadow-sm"
                id="title"
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
              />
            </div>

            <div className="mb-1">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control  shadow-sm"
                id="description"
                rows="3"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
              ></textarea>
            </div>

            <div className="col-md-4">
              <label htmlFor="name" className="form-label">
                Instructor Name
              </label>
              <input
                type="text"
                className="form-control  shadow-sm"
                id="name"
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="position" className="form-label">
                Position
              </label>
              <input
                type="text"
                className="form-control  shadow-sm"
                id="position"
                onChange={(e) => setNewPosition(e.target.value)}
                value={newPosition}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="specializes" className="form-label">
                Specializes
              </label>
              <input
                type="text"
                className="form-control  shadow-sm"
                id="specializes"
                onChange={(e) => setNewSpecializes(e.target.value)}
                value={newSpecializes}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="Email" className="form-label">
                Email Address:
              </label>
              <input
                type="email"
                className="form-control  shadow-sm"
                id="Email"
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="phone" className="form-label">
                Phone No:
              </label>
              <input
                type="phone"
                className="form-control  shadow-sm"
                id="phone"
                onChange={(e) => setNewPhone(e.target.value)}
                value={newPhone}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                onChange={(e) => setNewPhoto(e.target.files[0])}
                type="file"
                className="form-control  shadow-sm"
                id="image"
              />
            </div>

            <button type="submit" className="btn btn-add text-light my-2 mb-5">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
