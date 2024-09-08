import { groq } from "next-sanity";

export const homepageQuery = groq`
*[_type == "homePage"]{
  ...,

}`;

export async function getPage(slug: string): Promise<any> {
  return createClient(clientConfig).fetch(

      groq`*[_type == 'project' && slug.current == $slug][0]{
          _id,
          _createdAt,
          name,
          'slug': slug.current,
          'image': image.asset->url,
          content

      }`,
      { slug }

  );
}