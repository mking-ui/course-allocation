"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton(id) {
    const router = useRouter();
  const removeInstrutor = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`/api/instructor1?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button
    type="button"
    className=" delete border-0 shadow-none"
    onClick={ removeInstrutor}
  >
    <i className="bi bi-trash text-success"></i>
  </button>
  )
}
