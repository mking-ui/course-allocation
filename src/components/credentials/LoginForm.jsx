"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" shadow-sm w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container" id="LoginForm">
        <div className="row  justify-content-center">
          <div className="col-md-5">
            <div className="card con shadow border-0 shadow mt-5 ">
              <div className="card-body bg-transparent">
                <h1 className="text-center  mb-4">Login</h1>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label >Your Email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control shadow-none border-info "
                    />
                  </div>

                  <div className="mb-3">
                    <label >Your Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control shadow-none border-info "
                    />
                  </div>
                  {error && <div className=" text-danger">{error}</div>}
                  <div className="d-grid">
                    <button type="submit" className="btn btnlg">
                      Login
                    </button>
                  </div>
                  <Link className=" mt-2 fs-6  nav-link" href={"/"}>
                    only and admin can login!
                    <span className="underlined"> click </span>here
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
