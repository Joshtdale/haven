import { groq } from "next-sanity";

export const homepageQuery = groq`
*[_type == "homePage"]{
  ...,

}`;