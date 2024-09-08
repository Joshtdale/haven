import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export function GET(request: Request) {
  draftMode().enable();
  console.log('DRAFT MODE ENABLED');
  redirect(`/`);
}