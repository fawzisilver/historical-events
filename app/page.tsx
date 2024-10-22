"use client";
import dynamic from "next/dynamic";

const MapsApplication = dynamic(() => import("./components/MapApplication")) 

export default function Home() {
  return (
    <>
      <main className="content">
       <MapsApplication />
      </main>
    </>
  );
}