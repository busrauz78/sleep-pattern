import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="flex mt-4 ml-4">
      <Link href="/" className="border rounded-md p-5">
        Chronotype Doctor
      </Link>
    </div>
  )
}