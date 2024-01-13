"use client";
import { useRouter } from "next/navigation";

export default function RemoveButton({ id }) {
  const router = useRouter();
  const removeCourse = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`/api/level1?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button
      onClick={removeCourse}
      className="btn btn-readmore  border border-2 border-secondary "
    >
      <i className="bi bi-trash me-1 text-danger"></i>Delete
    </button>
  );
}

