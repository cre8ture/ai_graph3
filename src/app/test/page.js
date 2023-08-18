"use client";
import Head from "next/head";
import Table from "../../components/index/Display2";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=""></div>
      <div className="w-full h-full mx-auto md:w-full sm:w-full">
        <Table />
      </div>
    </div>
  );
}
