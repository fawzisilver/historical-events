"use client";
import dynamic from "next/dynamic";

const MapsApplication = dynamic(() => import("./components/MapApplication"), { ssr: false }) 

export default function Home() {
  return (
    <>
      <main className="content">
       <MapsApplication />
      </main>
    </>
  );
}