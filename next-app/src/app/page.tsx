import { draftMode } from "next/headers";
import Image from "next/image";
import { z } from "zod";
import { homepageQuery } from "../app/queries";
import { getCachedClient } from "../../sanity";

const PageSchema = z.any().array()

const Home = async () => {
  const preview = draftMode().isEnabled
  ? { token: process.env.SANITY_API_READ_TOKEN }
  : undefined;
  const client = getCachedClient(preview);
  const data = await client(homepageQuery);
  const sanityData = PageSchema.safeParse(data);
  console.log(sanityData)
  console.log(preview)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="text-white border border-red-500">{sanityData?.data?.[0].page.title}</div>
    </main>
  );
}

export default Home
