"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Lecturers =  () => {
  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const columns = [
    {
      name: "COURSE CODE",
      selector: (row) => row.code,
      sortable: true,
      id: "header",
    },
    {
      name: "COURSE TITLE",
      selector: (row) => row.title,
      sortable: false,
      id: "header",
    },
    {
      name: "NAME",
      selector: (row) => row.name,
      sortable: false,
      id: "header",
      
    },
    {
      name: "POSITION",
      selector: (row) => row.position,
      sortable: true,
      id: "header",
    },
    {
      name: "SPECIALISED/FIELD",
      selector: (row) => row.specializes,
      sortable: true,
      id: "header",
    },
  ];
  const data = [
    {
      id: 1,
      code: "CSC101",
      title: "Introduction to Computing",
      name: "Sir Julius",
      position: "Lecturer I",
      specializes: "Server",
    },
    {
      id: 2,
      code: "BIO101",
      title: "Introduction to Biology",
      name: "Prof. Bippa",
      position: "Junior Lecturer",
      specializes: "Computing ",
    },
    {
      id: 3,
      code: "CHM101",
      title: "Introduction to Organic Chemestry",
      name: "Mal.Micah",
      position: "Lecturer II",
      specializes: " Machine Learning",
    },
    {
      id: 4,
      code: "AGC101",
      title: "Introduction to Farming",
      name: "Sir. Jimmy",
      position: "Lecturer I",
      specializes: " AI Learning",
    },
    {
      id: 5,
      code: "PHY101",
      title: "Introduction to Themostat",
      name: "Mal. Amos ",
      position: "Senior Lecturer ",
      specializes: " Data Management"
    }
  ];

  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter((row) => {
      return (
        row.code.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setRecords(newData);
  }

  return (
    <div className=" container shadow" id="instructor">
      <div className="row primary-color d-flex flex-row">
        <div className="col-12">
          <p className="display-6 mb-0 text-justify">
            <Link className="btn border-0  back  shadow btn-sm mx-1" href="/">
              <i className="bi bi-arrow-left mx-1"> </i>
            </Link>
            <button type="button" class="btn btl btn-lg position-relative mt-2">
              Instructor
              <span class="position-absolute top-0 start-100 translate-middle p-2 btl border border-3 border-light rounded-circle">
                <span class="visually-hidden"></span>
              </span>
            </button>
          </p>
          <blockquote className=" mt-3 mt-md-2 text-justify">
            Welcome to instructor course allocation page.
          </blockquote>
        </div>
      </div>

      <div className="shadow-none mb-1 py-2">
        <input
          type="text"
          onChange={handleFilter}
          className="shadow border-0 p-2 rounded-2 col-12 col-md-4"
          placeholder="search"
        />
      </div>
      <h3>Your Courses</h3>
      <div className="card con">
        {isClient && (
          <DataTable
           resizable
            columns={columns}
            data={records}
           expandableRowDisabled={false}
            selectableRows
            fixedHeader
            pagination    
          ></DataTable>
        )}
      </div>
    </div>
  );
};

export default Lecturers;
