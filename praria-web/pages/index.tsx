// 'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
// import { draftMode } from "next/headers";
import { z } from "zod";
import { homepageQuery } from "@/queries";
import { getCachedClient } from "@/sanity";

const PageSchema = z.any().array()

const inter = Inter({ subsets: ["latin"] });

export default  function Home({sanityData}) {
  console.log(sanityData.data[0].page.title)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="text-white border border-red-500">{sanityData.data[0].page.title}</div>
    </main>
  );
}


export async function getStaticProps() {
  const preview = {}; // Adjust your preview logic if needed
  const client = getCachedClient(preview);
  const data = await client(homepageQuery);
  const sanityData = PageSchema.safeParse(data);

  return {
    props: {
      sanityData,
    },
  };
}