import "server-only";
import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const { SanityLive, sanityFetch } = defineLive({ client });
