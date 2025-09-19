import { defineLive } from "next-sanity/live";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client as any,   // 👈 prevents TS comparing duplicate SanityClient types
});
