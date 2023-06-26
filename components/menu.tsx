import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="flex flex-row items-center justify-between my-10 gap-5">
      <Link href="/" className="border rounded-md p-5">
        CHRONOTYPE DOCTOR
      </Link>
      <div className="flex gap-5">
        <Link className="border rounded-md p-5" href="/about">ABOUT</Link>
        <Link className="border rounded-md p-5" href="/chronotypes">CHRONOTYPES</Link>
      </div>
    </div>
  )
}