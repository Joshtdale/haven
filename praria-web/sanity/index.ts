import { cache } from "react"
import { createClient } from '@sanity/client'
import type { SanityClient } from "@sanity/client";
// import { env } from "../../env";


export function getClient(preview?: { token?: string }): SanityClient {
  const client = createClient({
    projectId: "ib1ciqv7",
    dataset: "production",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: 'v2023-08-01', 
    perspective: 'published',
  })

  // if (preview) {
  //   if (!preview.token) {
  //     throw new Error('You must provide a token to preview drafts')
  //   }
  //   return client.withConfig({
  //     token: preview.token,
  //     useCdn: false,
  //     ignoreBrowserTokenWarning: true,
  //     perspective: 'previewDrafts',
  //     stega: {
  //       enabled: true,
  //       studioUrl: env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://ussf.sanity.studio/',
  //     },
  //   });
  // }
  return client;
}

export const getCachedClient = (preview?: { token?: string }) => {
  const client = getClient(preview);
  if (process.env.NODE_ENV === 'development') {
    return client.fetch.bind(client);
  }
  return cache(client.fetch.bind(client));
};