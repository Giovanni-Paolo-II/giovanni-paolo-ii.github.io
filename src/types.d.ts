import type { CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

export type NotizieEntry = CollectionEntry<"notizie">;

export interface PolicyFrontmatter {
  title: string;
  date: DateObject | null;
  author?: string;
  image?: string | ImageMetadata;
}
