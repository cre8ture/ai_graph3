"use client";
import Stream from '../../components/stream/Stream'
import Head from "next/head";
import Table from "../../components/graph/graph3";
import {useState} from 'react'


export default function Home() {
  const [newNodes, setNewNodes] = useState([])
  const [newEdges, setNewEdges] = useState([])

  console.log("newNodes, newEdges", newNodes, newEdges)

  return (
    <div className="">
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stream setNewNodes={setNewNodes} setNewEdges={setNewEdges} />
      <div className=""></div>
      <div className="w-full h-full mx-auto md:w-full sm:w-full">
        <Table newNodes={newNodes} newEdges={newEdges}/>
      </div>
    </div>
  );
}
