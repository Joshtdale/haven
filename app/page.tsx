import { draftMode } from "next/headers";
import Image from "next/image";
import { env } from "process";
import { HomePageSchema } from "./_schemas/homePage";

export default function Home() {
  const preview = draftMode().isEnabled
  ? { token: env.SANITY_API_READ_TOKEN }
  : undefined;
  const sanityData = HomePageSchema.safeParse(await getCachedClient(preview)(homepageQuery));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
      </main>
    </div>
  );
}
