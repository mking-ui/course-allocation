"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("/api/level1", {
      cache: "no-store",
    }).then((response) =>
      response.json().then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.code &&
            user.code.toLowerCase().includes(value)
          );
        });
        setResults(results);
      })
    );
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="container ">
      <div className=" d-flex justify-content-center align-items-center mt-4 mb-3 mb-2 text-justify">
        <Link
          className="btn border-0  back  shadow btn-sm mx-1"
          href="/courses"
        >
          <i className="bi bi-arrow-left mx-1"> </i>
        </Link>

        <button type="button" class="btn btl btn-lg position-relative mt-2">
          Search using your course code.
          <Link href="/viewcourse">
            <span class="position-absolute top-0 start-100 translate-middle p-2 btl border border-3 border-light rounded-circle">
              <span class="visually-hidden"></span>
            </span>
          </Link>
        </button>
      </div>
      <div className="row d-flex justify-content-center align-items-center my-2 ">
        <input
          type="text"
          className="shadow border-0 p-2 rounded-2  col-12 col-lg-6"
          placeholder="search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}
