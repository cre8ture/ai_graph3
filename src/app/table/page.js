"use client";
import Head from "next/head";
import Table from "../../components/index/Display";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=""></div>
      <div className="w-3/5 mx-auto md:w-7/10 sm:w-full">
        <Table />
      </div>
    </div>
  );
}
