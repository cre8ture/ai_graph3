// "use client";
// import Head from "next/head";
import Table from "../../components/tables/Table";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div className="absolute top-0 left-0 w-full h-full bg-gray-100 transition-all ease-out duration-500 max-h-screen max-h-0"></div>
      <Table />
    </div>
  );
}
