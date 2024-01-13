"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const InstructorTable = () => {
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
    {
      name: "PHONE",
      selector: (row) => row.phone,
      sortable: true,
      id: "header",
    },
  ];
  const [records, setRecords] = useState([]);

  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("/api/level1")
      .then((Response) => Response.json())
      .then((Response) => {
        setRecords(Response);
        setRecord(Response);
      });
  }, []);

  const handleFilter = (event) => {
    const newData = records.filter((row) => {
      return (
        row.code.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setRecord(newData);
  };

  return (
    <div className=" container " id="instructorView">
      <div className="row primary-color d-flex flex-row">
        <div className="col-12">
          <p className="display-6 mb-0 text-justify">
            <Link
              className="btn border-0  back  shadow btn-sm mx-1"
              href="/dashboard"
            >
              <i className="bi bi-arrow-left mx-1"> </i>
            </Link>
            <button
              type="button"
              class="btn w-100 btl btn-lg position-relative my-2"
            >
             
             Tabular view.
     
             
              <br />
              <input
                type="text"
                onChange={handleFilter}
                className="shadow border-0 p-2 mb-1 rounded-2 col-12 col-md-8"
                placeholder="Search using code or name"
           
              />
            </button>
          </p>
        </div>
      </div>

      <h3>Your Courses</h3>
      <div className="card rounded-0 con">
        {isClient && (
          <DataTable
            columns={columns}
            data={record}
            selectableRows
            fixedHeader
            pagination
          ></DataTable>
        )}
      </div>
    </div>
  );
};

export default InstructorTable;
