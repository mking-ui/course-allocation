"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Instructor = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const columns = [
    {
      name: "CODE",
      selector: (row) => row.code,
      sortable: true,
      id: "header",
    },
    {
      name: "COURSE TITLE",
      selector: (row) => row.title,
      sortable: false,
      id: "header",
      width: 300,
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
      name: "SPECIALISED",
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
    <div className=" container " id="instructor">
      
        <div className="col-12">
        
            <Link className="btn border-0 back shadow btn-sm mx-1 my-3" href="/">
              <i className="bi bi-arrow-left mx-1 p-1"></i>
            </Link>
           <div>
             Instructor table view.
     
              <br />
              <div className="shadow-none mb-1 mt-0">
                <input
                  type="text"
                  onChange={handleFilter}
                  className="shadow  p-2 rounded-2 border border-secondary col-12 col-md-4 text-light"
                  placeholder="Search using name or code"
                />
              </div>
              </div>
      
        </div>
      

      <h6 className="text-uppercase my-3">Your Courses</h6>
      <div className="card text-start con rounded-0">
        {isClient && (
          <DataTable
            resizable
            columns={columns}
            data={record}
            expandableRowsComponent={true}
            fixedHeader
            pagination
          ></DataTable>
        )}
      </div>
    </div>
  );
};

export default Instructor;
